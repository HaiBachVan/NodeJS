var sys = require('sys'),
http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {
    'Server': 'nodeJS',
    'Content-Type': 'text/html',
    'Content-Length': '18',
    'Connection': 'close',
  });
  res.write('<p>Hello World</p>');
  res.end();
}).listen(8080);
