var fs=require('fs');
const maths= require('./maths');
// fs.clo
fs.readFile('input.txt',(err,data)=>{
  fs.copyFile('input.txt','duplicate.txt',(err)=>{console.log(err);});
})

var [result,product]=[maths.sum(4,4),maths.multiply(3,8)];
fs.wr
fs.writeFile('output.txt',`The sum of the numbers is: ${result}. The product of the numbers is: ${product}`,
(err)=>{console.log(err)});