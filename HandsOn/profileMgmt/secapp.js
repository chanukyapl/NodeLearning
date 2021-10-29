const express = require("express");
const fs = require("fs");

//setting up the express router
const app = express();

app.use(express.json());

app.post('/add',(req,res)=>{
  // let ss=JSON.parse(fs.readFileSync('/post.json','utf8'));
  // let data={id: req.body.id,name: req.body.name,age: req.body.age,
  //           gender: req.body.gender,email: req.body.email};
  // ss.push(data)
  // fs.writeFile('./post.json',ss,(a) => {
  //     res.status(200).send();
  //   });
      res.status(200).send();
  

})

app.patch('/edit/:id',(req,res)=>{
  let ss=JSON.parse(fs.readFileSync('/post.json','utf8'));
  let see=ss.filter((val, key) => {
    console.log(id);
    if (val.id === parseInt(req.params.id)) {
      console.log(val);
      val.name=req.body.name;
      return val;
    }
  })
  fs.writeFile('./post.json',see,(a) => {
      res.status(200);
    });}
)

app.get('/view/:id',(req,res)=>{
  if(req.params.id==='undefined'){    
  let ss=JSON.parse(fs.readFileSync('./get.json','utf8'));
  res.status(200).json(ss);
  }
  else {
let ss=JSON.parse(fs.readFileSync('./get.json','utf8'));
let see=ss.filter((val, key) => {
    console.log(id);
    if (val.id === parseInt(id)) {
      console.log(val);
      return val;
    }
  })
  res.status(200).json(see);
  }
let ss=JSON.parse(fs.readFileSync('./get.json','utf8'));
  res.status(200).json(ss);
})
//write the code for routes here

module.exports = app;
