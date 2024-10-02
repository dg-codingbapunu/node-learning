const http = require('http');

const server = http.createServer((req,res)=>{
console.log('server strated');
res.end('hello');
});
server.listen(8080);