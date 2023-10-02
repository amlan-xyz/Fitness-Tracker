const Food=require('../models/foods.model')

const addFood=async(foodDetails)=>{
    const {foodName,calories,protein,carbohydrates,fat}=foodDetails;
    try{
        const newItem={
            food_name:foodName,
            calories:Number(calories),
            protein:Number(protein),
            carbohydrates:Number(carbohydrates),
            fat:Number(fat)
        }
        const newFood=new Food(newItem);
        await newFood.save();
        return newFood;
    }catch(error){
        console.error("Cannot add food:",error)
    }
}

const getAllFoods=async()=>{
    try{
        const foods=await Food.find({})
        return foods;
    }catch(error){
        console.error("Cannot getting foods:",error)
    }
}


const deleteFoodById=async(foodId)=>{
    try{
        const deletedFood=await Food.findByIdAndDelete(foodId);
        return deletedFood;
    }catch(error){
        console.error("Cannot delete food",error);
    }
}

module.exports={addFood,getAllFoods,deleteFoodById}