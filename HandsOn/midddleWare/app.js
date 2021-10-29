var express=require('express');
var app=express();
var router=require('./router/things')

app.use('/things',router);
//this is middleware where the request that starts with /things/ will redirected to things.js
app.get('/',(req,res)=>{
    res.json({hello: "hello"});
});

app.listen(3000,err=>{
    console.log(err);
});