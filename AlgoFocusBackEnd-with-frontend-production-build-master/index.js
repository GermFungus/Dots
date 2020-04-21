require('dotenv').config();
var http = require('http');
var app = require('./Server/app');
var port = process.env.PORT || 4000;

var server = http.createServer(app);
server.listen(port , ()=>{
 console.log("listning On Port" + port);
});