var fs=require('fs');
let retrievedData=fs.readFileSync('file.txt');
console.log("Read data synchronously: "+retrievedData.toString());
fs.readFile('file.txt',(error,data)=>{
    if(error)console.error(error);
    else{
        console.log("Read data Asynchronously: "+data.toString());
    }

})
fs.writeFile('output.txt',data)
console.log("End text");