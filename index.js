var http = require('http');
/*var setup = require('proxy');
 
var server = setup(http.createServer());
server.listen(25, function () {
    var port = server.address().port;
    console.log('HTTP(s) proxy server listening on port %d', port);
});*/

http.createServer(function(req,res){
 res.writeHead(200, {"content-type" : "text/plain"});
	res.write("hello world");	
	res.end();
}).listen(process.env.PORT||3000);
