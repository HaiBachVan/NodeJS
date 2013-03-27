var cluster = require("cluster");
var http = require("http");
var nCPU = require('os').cpus().length;

var rssWarn = 14 * 1024 * 1024 ,
	heapWarn = 10 * 1024 * 1024;

if (cluster.isMaster){
	for (var i=0; i< nCPU; i++){
		var worker = cluster.fork();
		worker.on("message", function(m){
			if (m.memory){
				if (m.memory.rss > rssWarn){
					console.log("Worker " + worker.pid + "use too much 	 memory: " + m.memory.rss);
				}
			}
		});
	}
}else {
	//create server
	http.Server(function(req,res){
		res.writeHead(200);
		res.end("Hello world\n");
	}).listen(8080);

	setInterval(function(){
		process.send({memory: process.memoryUsage(),process: process.pid});
	}, 1000);
}