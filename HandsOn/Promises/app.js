//promisifyAll then bluebird
let express=require('express');
let fs=require('fs');
let app=express();

// let 
var myPromise = new Promise(function(resolve, reject){   
              let ss= fs.readFileSync('./users.json', 'utf-8');
              console.log(ss);
              if(ss){
                  console.log(ss);
                resolve(ss);
              }
              else{
reject("Error occured")
              }
            });

app.get('/users', function(req,res) {
  fs.readFile('./users.json', 'utf-8', function(err, data) {  

    if(err) {
      console.error("unable to read file");
    }
    else {
      try {
          data = JSON.parse(data);
          res.send(data);
      }
      catch (e) {
          console.error("invalid json file");
      }
    }
  });
});
app.listen(3000,function(){
  console.log("listening on port 8000");
  myPromise.then((resolve)=>{console.log(resolve);
  },(resolve)=>{console.log(resolve);
  })
});