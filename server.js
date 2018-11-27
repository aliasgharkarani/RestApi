const express=require('express');
const bodyParser= require('body-parser')
const mongoose = require('mongoose')
// const routes=require('./routes/api');

//Set Up Express App
const app=express();

mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(bodyParser.json())
//Initialize Routes
app.use('/api',require('./routes/api'));

//Error handling 
app.use(function(error,req,res,next){
    console.log(error)
    res.status(422).send(JSON.stringify({error:error.message}));
})

//listen for requests
app.listen(process.env.port || 5000,function(){
    console.log("Now listening at 5000");
})
    //Req= Request
    //Res= Response
    // app.get('/api',function(req,res){
    //     console.log('GET request')
    //     res.send(JSON.stringify({name:"Ali"}));
    // })