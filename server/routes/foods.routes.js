const express=require('express');
const router=express.Router();

//models
const Food=require('../models/foods.model');

//utils
const { addFood, getAllFoods, deleteFoodById } = require('../utils/foods.functions');

router.post('',async(req,res)=>{
    const foodDetails=req.body;

    const doesFoodExist=await Food.findOne({food_name:foodDetails.foodName});
    if(doesFoodExist){
        res.status(409).json({message:"Food already exist"});
    }else{
        try{
            const newFood=await addFood(foodDetails);
            if(newFood){
                res.status(201).json({message:"Food added",data:newFood});
            }else{
                res.status(422).json({message:"Failed to add food"})
            }
        }catch(error){
            res.status(500).json({message:"Internal server error",error})
        }
    }

})

router.get('',async(req,res)=>{
    try{
        const foods=await getAllFoods();
        if(foods){
            res.status(200).json({message:"Foods:",data:foods});
        }else{
            res.status(404).json({message:"Error geting foods"})
        }
    }catch(error){
            res.status(500).json({message:"Internal server error",error})
    }
})

router.delete('/:id',async(req,res)=>{
    const foodId=req.params.id;
    try{
        const deletedFood=await deleteFoodById(foodId);
        if(deletedFood){
            res.status(200).json({message:"Food deleted",data:deletedFood});
        }else{
            res.status(404).json({message:"Food doesn't exist"})
        }
    }catch(error){
        res.status(500).json({message:"Internal server error",error})
    }
})

module.exports=router;