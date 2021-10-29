const express = require("express");
const fs = require("fs");

//setting up the express router
const app = express();

app.use(express.json());

app.use((req,res,next)=>{
  console.log(req.params);
  console.log(req.body);
  console.log(req.headers);
  console.log(req.originalUrl);
  console.log(req.path);
next();
});

app.post('/add',(request,res)=>{
  let data=require('./post.json');
    const id = request.body.id;
    const name = request.body.name;
    const age = request.body.age;
    const gender = request.body.gender;
    const email = request.body.email;
  data.push({ "id": id, "name": name, "age": age, "gender": gender, "email": email});
  fs.writeFile( "./post.json", JSON.stringify( data ), "utf8", function() {
    res.send(200,{success: true});
  } );
});

app.get('/view/:id?',(req,res)=>{
// app.get(/(\/view\/){1}(\?id=\d*\/)?$/g,(req,res)=>{
// app.get(/((\/view){1}(\?id=\d*\/?)?)$/g,(req,res)=>{
  // let file = fs.readFile('./get.json', 'utf8',(err,data)=>{
  //   console.log(data);
  //   res.send(data);
  // });
  let file = fs.readFileSync('./get.json', 'utf8');
  let filejson = JSON.parse(file);
  
  let id=req.query.id;
  // console.log(req.params);
  // console.log(req.headers);
  // console.log(req.baseUrl);
  // console.log(req.path);
  // console.log(req.query.id);
  // console.log(id);
  if(id){
  let vales = filejson.filter((val, key) => {
    console.log(id);
    if (val.id === (id)) {
      console.log(val);
      return val;
    }
  });
  res.status(200).send(vales);
}
else{
  res.status(200).send(filejson);
}

})
// app.get('/view',(req,res)=>{
//   let file = fs.readFileSync('./get.json', 'utf8');
//   let filejson = JSON.parse(file);
//   res.send(filejson);
// });


app.patch('/edit/:id', function (req, res) {
  data = require('./post.json');
  var index = req.params.id;
      // const id = data[index].name;
    // const name = request.body.name ;
    data[index].name= req.body.name;
    // const age = request.body.age || data[index].age;
    // const gender = request.body.gender || data[index].gender;
    // const email = request.body.email || data[index].email;
    // const data={ "id": id, "name": name, "age": age, "gender": gender, "email": email};
  
  fs.writeFile( "./post.json", JSON.stringify( data ), "utf8", function() {
    res.status(200).send({success: true});
  } );
});

//write the code for routes here
app.listen(8080, () => {
  console.log("listening on port 8080");

})
module.exports = app;
