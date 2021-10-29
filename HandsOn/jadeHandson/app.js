const express= require('express');
var app = express();

app.set("view engine", "jade");
app.listen(8000);
app.get('/',(req,res)=>{
  res.render('view',{ option:"teachers" ,Teachers :["Swarnali", "Paromita", "Poulomi", "sreejukta"],
  Students:["Athul", "Ramij", "Nil", "Satyaki", "Souvik"]})
})