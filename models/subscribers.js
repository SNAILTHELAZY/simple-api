const mongoose=require('mongoose');

const subscriberSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    subscribedToChannel:{
        type:String,
        required:true
    },
    subscribeDate:{
        type:Date,
        required:true,
        default:Date.now
    }
});

module.exports=mongoose.model('Subscriber',subscriberSchema);