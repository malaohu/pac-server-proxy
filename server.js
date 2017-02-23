var http = require('http');
/*var setup = require('proxy');
 
var server = setup(http.createServer());
server.listen(25, function () {
    var port = server.address().port;
    console.log('HTTP(s) proxy server listening on port %d', port);
});*/

http.createServer(function(req,res){res.write('this is test');res.end();}).listen(8080);
