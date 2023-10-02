const express=require('express');
const router=express.Router();

//models
const Goal=require('../models/goals.model')

//utils
const {addGoal, getAllGoals, deleteGoalById} =require("../utils/goals.functions");

router.post("",async(req,res)=>{
    const goalDetails=req.body;

    const doesGoalExist=await Goal.findOne({goal_name:goalDetails.goalName});
    
    if(doesGoalExist){
        res.status(409).json({message:"Goal Already Exist"});
    }else{
        try{
            const newGoal=await addGoal(goalDetails);
            if(newGoal){
                res.status(201).json({message:"Goad added",data:newGoal});
            }else{
                res.status(422).json({message:"Failed to add goal"})
            }
        }catch(error){
            res.status(500).json({message:"Internal server error",error})
        }
    }
})

router.get('',async(req,res)=>{
    try{
        const goals=await getAllGoals();
        if(goals){
            res.status(200).json({message:"Goals",data:goals});
        }else{
            res.status(404).json({message:"Goals not found"})
        }
    }catch(error){
            res.status(500).json({message:"Internal server error",error})
    }
})

router.delete("/:id",async(req,res)=>{
    const goalId=req.params.id;
    try{
        const deletedGoal=await deleteGoalById(goalId);
        if(deletedGoal){
            res.status(200).json({message:"Goal deleted",data:deletedGoal});
        }else{
            res.status(400).json({message:"Goal deletion failed"})
        }
    }catch(error){
        res.status(500).json({message:"Internal server error",error})
    }
})

module.exports=router;