const mongoose=require('mongoose');

const exerciseSchema=new mongoose.Schema({
    exercise_name:{
        type:String,
        required:true,
        unique:true
    },
    duration:{
        type:Number,
        required:true
    },
    calories_burned:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})

const Exercise=mongoose.model("Exercise",exerciseSchema);
module.exports=Exercise;