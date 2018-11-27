const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create ninja Schema model
const NinjaSchema = new Schema({
    name:{
        type:String,
        required:[true,'Name field is Required']
    },
    rank:{
        type:String,
    },
    available: {
        type:Boolean,
        default:false,
    }
    //Add in Geo Location!
});

const Model = mongoose.model('ninja',NinjaSchema);
module.exports = Model;