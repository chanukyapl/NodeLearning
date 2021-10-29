var fs=require('fs');
let readablestream=fs.createReadStream('input.txt');
readablestream.setEncoding('utf8')
readablestream.on('data',(chunk)=>{console.log(chunk,"chunk")});
readablestream.on('error',(chunk)=>{console.log(chunk)});

let writableStream=fs.createWriteStream('output.txt','utf8');
writableStream.write(`Hello This is going to be inserted by writeStream`,(err)=>{console.log(err);});
writableStream.end();
writableStream.on('finish',()=>{console.log("Finished!!");})
