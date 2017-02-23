var http = require('http');
var httpProxy = require('http-proxy');
 
httpProxy.createProxyServer({}).listen(process.env.PORT||8088);
