var express=require('express');
var router=express.Router();
router.route('/cars')
.get((req,res)=>{
    res.send('vast amoubt of cars');
})
.post((req,res)=>{
    res.json({success:"success"});
})

module.exports=router;