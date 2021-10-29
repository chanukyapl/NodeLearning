var express=require('express');
var app=express();
// app.use(express.cookieParser());

app.get('/user/:name',(req,res)=>{
    res.cookie('name',req.params.name)
    .send("name of the user"+req.params.name);
    //we can use res.clearCookie() to clear the cookie
    // req.sess
})
app.use((req,res)=>{
    res.send(404,'Page not Found :(');
})
app.listen(8080,(error)=>{
    console.log("error occured because they removed cookieParser support"+error);
})