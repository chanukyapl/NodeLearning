var http = require('http');
const url = require('url');
const querystring = require('querystring');
paths=["/cal"];

http.createServer((req,res)=>{

 if( url.parse( req.url).pathname===paths[0]){
cal(res,querystring.parse( url.parse( req.url).query))
 }

}).listen(8000);

function cal(res,query){
  console.log(query);
  res.writeHead(200,{"Content-Type": "text/html"});
  if(query.func==='add'){
  res.write(`Addition is: ${parseInt(query.a) + parseInt(query.b)}`)
  }
  else if(query.func==='subtract'){
  res.write(`Subtraction is: ${parseInt(query.a) - parseInt(query.b)}`)
  }
  else if(query.func==='multiple'){
  res.write(`Multiplication is: ${parseInt(query.a) * parseInt(query.b)}`)
  }
  else {
  res.write(`Division is: ${parseInt(query.a) / parseInt(query.b)}`)
  }
  res.end();
}