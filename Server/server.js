var http = require('http');
var url = require('url');
var fs = require('fs');
function urlName(err, data, response){
		if (err){
			response.writeHead(404, {'Content-Type': 'text/html'});
			return response.end("404 Not Found");
		}
		response.writeHead(200, {'Content-Type': 'text/html'});
    	response.write(data);
    	return response.end();
	}
var server = http.createServer(function(request, response){
	var q = url.parse(request.url, true);
	var filename = "." + q.pathname;
	fs.readFile(filename, function(err, data){
		urlName(err,data,response);
	});

});
server.listen(8888);