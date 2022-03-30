const http = require("http");
const url = require("url");


//create a server using 'http' modules
const server = http.createServer((req, res) => {
  res.writeHead(200, "content-type: text");
  res.write("<h1>Hello world!!</h1>");
  let urlData = url.parse(req.url, true);
  //console.log(urlData.query);
  res.write(`param animal: ${urlData.query.animal} <br>`);
  res.write(`param color: ${urlData.query.color} <br>`);
  res.end();
});

server.listen(3000);
