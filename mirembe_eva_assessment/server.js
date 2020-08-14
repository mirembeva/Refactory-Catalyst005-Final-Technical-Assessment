//require dependencies
const express =require('express');
const bodyParser = require('body-parser');
const path = require('path')
const testRoutes=require('./routes/formRoutes')
const mongoose = require('mongoose');

const app=express();

//path to static files
app.use(express.static(path.join(__dirname,'public')))

//use middle ware body parser
app.use (bodyParser.urlencoded({extended:true}))

//setting view engine to pug
app.set('view engine', 'pug')
app.set('views', './views')

//use routes
app.use('/test', testRoutes)

//database connection
mongoose.connect('mongodb://localhost:27017/ElectoralCommission', {useNewUrlParser: true, useUnifiedTopology: true});



//require rooutes


//use routes


app.listen(4000,()=>{
    console.log('server listenning on port 4000')
})