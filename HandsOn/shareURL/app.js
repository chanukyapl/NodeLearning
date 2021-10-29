var http=require('http')

http.createServer((request,res)=>{
    request.setEncoding('utf8');
    // console.log(url.parse(request.url));
    // console.log(request.url)
    res.writeHead(200,{"Content-Type": "text/html"})
    res.write('<h1>Welcome Master link: https://videoken.com/embed?videoID=L6_CoHNSbwc');
    res.end()
}).listen(8080);