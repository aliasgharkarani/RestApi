const express = require('express');
const router = express.Router();

//Geting Data
router.get('/ninjas',function(req,res){
    res.send(JSON.stringify({type:"GET"}))
})

//Adding Data
router.post('/ninjas',function(req,res){
    res.send({type:"POST"})
})

//Updating Data
router.put('/ninjas/:id',function(req,res){
    res.send({type:"PUT"})
})

//Delete Data
router.delete('/ninjas/:id',function(req,res){
    res.send({type:"DELETE"})
})

module.exports=router;