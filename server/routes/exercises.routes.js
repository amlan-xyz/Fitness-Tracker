const express=require('express');
const { addExercise,findAllExercises, deleteExerciseById } = require('../utils/exercises.functions');
const router=express.Router();

router.post('',async(req,res)=>{
    const exerciseDetails=req.body;
    try{
        const exercise=await addExercise(exerciseDetails);
        if(exercise){
            res.status(201).json({message:"Exercise added",data:exercise})
        }else{
            res.status(400).json({message:"Adding exercise failed"});
        }
    }catch(error){
        res.status(500).json({message:"Internal Server Error",error})
    }
})

router.get('',async(req,res)=>{
    try{
        const exercises=await findAllExercises();
        if(exercises){
            res.status(200).json({message:"Exercises found",data:exercises})
        }else{
            res.status(404).json({message:"Cannot find exercises"})
        }
    }catch(error){
        res.status(500).json({message:"Internal Server Error",error})
    }
})

router.delete('/:id',async(req,res)=>{
    const exerciseId=req.params.id;
    try{
        const deletedExercise=await deleteExerciseById(exerciseId);
        if(deletedExercise){
            res.status(200).json({message:"Exercise Deleted",data:deletedExercise});
        }else{
            res.status(404).json({message:"Exercise not found"});
        }
    }catch(error){
        res.status(500).json({message:"Internal Server Error",error})
    }
})


module.exports=router;