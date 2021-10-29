let http=require('http');
let url=require('url');
const querystring = require('querystring');
let rawUrl = 'https://stackabuse.com/?page=2&limit=3';

let parsedUrl = url.parse(rawUrl);
let parsedQs = querystring.parse(parsedUrl.query);
console.log(parsedQs);
console.log(parsedQs.page);

function createServeron8080(){
console.log("called createServeron8080")
http.createServer((request,res)=>{
    request.setEncoding('utf8');
    console.log(url.parse(request.url));
    console.log(request.url)
    res.writeHead(200,{"Content-Type": "text/html"})
    res.write('<h1>Welcome Master');
    res.end()
}).listen(8080);

}
exports.createServeron8080=createServeron8080;