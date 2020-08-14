const express=require('express')
const router=express.Router();
//model
const Test=require('../models/testModel')

router.get('/',(req,res)=>{
    res.render('form')
})

router.post('/test',async(req,res)=>{
    //console.log(req.body)
    //res.json(req.body)
    const test= new Test(req.body)
    try{
        await test.save((err)=>{
            //console.log(req.body)
            if(err){
                console.log(err)
            }
            res.redirect('/test')
        })

    }catch(err){
        console.log(err)

    }
})

module.exports=router;