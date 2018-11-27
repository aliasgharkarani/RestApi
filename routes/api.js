const express = require('express');
const router = express.Router();
const Model = require('./../Schema')
//Geting Data
router.get('/ninjas', function (req, res,next) {
    res.send(JSON.stringify({ type: "GET" }))
})

//Adding Data
router.post('/ninjas', function (req, res,next) {
    // console.log(req.body);
    // var ninja=new Model(req.body);
    // ninja.save();
    
    //Its Returns A Promise
    Model.create(req.body).then(function(ninja){
        res.send(ninja)
    }).catch(next)

})

//Updating Data
router.put('/ninjas/:id', function (req, res,next) {
    res.send({ type: "PUT" })
})

//Delete Data
router.delete('/ninjas/:id', function (req, res,next) {
// console.log(req.params.id)
Model.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
res.send(ninja)
});
});

module.exports = router;