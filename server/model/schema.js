const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const contactSchema=new Schema({
    first_name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    query:{
        type:String,
        required:true,
    }
},{timestamps:true});

const Data=mongoose.model("contact",contactSchema);
module.exports=Data;

