var sys = require('sys'),
http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {
    'Server': 'nodeJS',
    'Content-Type': 'text/html',
    'Content-Length': '18',
    'Connection': 'close',
  });

  var x = 3;
  var steps = 1000000;
  var pi = (1 - 1 / x);

  for (var i = 0; i < steps; i++) {
    x += 2;
    if (i % 2) {
      pi -= 1/x;
    } else {
      pi += 1/x;
    }
  }
  pi *= 4;
  res.write('Pi = '+ pi);
  res.end();
}).listen(8080);
