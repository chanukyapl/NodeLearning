const { error } = require('console');
var http=require('http');
http.createServer(function(request,response){
    console.groupCollapsed("start")
    console.log("Hello");
    // console.log(request);
    console.groupEnd();
    console.log(request.headers);
    response.writeHead(202,'Good');
    response.write('Awesome',(error,res)=>{console.log(error,res)});
    response.end(' Chanukya');
    
}).listen(8080)