const http = require('http');
const fs = require('fs');
const PORT = 8080;

fs.readFile('./index.html', function(err, html) {
	if (err) {
	    throw err;
}
	http.createServer(function (req, res) {
	  // add a HTTP header:
	  res.writeHead(200, {'Content-Type': 'text/html'});
	  res.write(html);
	  res.end();
	  console.log('Now listening on port ' + PORT + '.');
	}).listen(PORT);
});