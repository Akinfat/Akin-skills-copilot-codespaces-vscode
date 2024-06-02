// Create web server
// Run with: node comments.js
// Access with: http://localhost:3000

var http = require('http');
var url = require('url');
var qs = require('querystring');

var comments = [];

http.createServer(function (req, res) {
  var path = url.parse(req.url).pathname;
  var query = url.parse(req.url).query;

  if (req.method == 'POST' && path == '/comment') {
    var body = '';
    req.on('data', function (data) {
      body += data;
    });
    req.on('end', function () {
      var comment = qs.parse(body).comment;
      comments.push(comment);
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Thanks for your comment\n');
    });
  } else if (req.method == 'GET' && path == '/comments') {
    var output = '';
    for (var i = 0; i < comments.length; i++) {
      output += comments[i] + '\n';
    }
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(output);
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not found\n');
  }
}).listen(3000);

console.log('Server running at http://localhost:3000/');

// Run with: node comments.js
// Access with: http://localhost:3000
// Test with: curl -d 'comment=hello' http://localhost:3000/comment
// Test with: curl http://localhost:3000/comments