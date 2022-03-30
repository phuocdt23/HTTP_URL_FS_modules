const http = require('http');
const url = require('url');

//create a server using 'http' modules
const server = http.createServer((req,res) =>{
    res.writeHead(200, 'content-type: text');
    res.write('<h1>Hello world!!</h1>');
    const urlData = url.parse(req.url,true);
    console.log(urlData);
    
    res.end();
});

server.listen(3000);