const http = require('http');

const httpFun = http.createServer(function(req, res){
    res.end("Send info to the client!!!");
}).listen("9000");

module.exports = httpFun;
