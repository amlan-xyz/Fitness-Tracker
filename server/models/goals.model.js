const mongoose=require('mongoose');

const goalSchema=new mongoose.Schema({
    goal_name:{
        type:String,
        required:true,
        unique:true
    },
    goal_description:{
        type:String,
        required:true,
    },
    target_date:{
        type:Date,
        required:true
    },
    target_calories:{
        type:Number,
        required:true
    },
    goal_status:{
        type:String,
        default:"pending"
    }
},{timestamps:true});

const Goal=mongoose.model("Goal",goalSchema);
module.exports=Goal;