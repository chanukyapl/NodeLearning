var express=require('express');
var mysql=require('mysql');

var app=express();

//config db
var connection=mysql.createConnection({
    host:"",
    database:"",
    user:"",
    password:""
})
connection.connect(err=>{
    console.log(err+"error occured");
})

app.get('/',(req,res)=>{
    res.send('Hello');
})

app.listen('8080',()=>{
    console.log("congrats!! port listening on 8080");
});