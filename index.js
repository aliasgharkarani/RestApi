const express=require('express');
// const routes=require('./routes/api');

//Set Up Express App
const app=express();

//Initialize Routes
app.use('/Api',require('./routes/api'));


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