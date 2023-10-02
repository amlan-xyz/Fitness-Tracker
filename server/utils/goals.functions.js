const Goal=require('../models/goals.model')

const addGoal=async(goalDetails)=>{
    const {goalName,goalDescription,targetDate,targetCalories,goalStatus}=goalDetails;
    try{
        const newGoal={
            goal_name:goalName,
            goal_description:goalDescription,
            target_date:targetDate,
            target_calories:Number(targetCalories),
            goal_status:goalStatus
        };

        const goal=new Goal(newGoal);
        await goal.save();
        return goal;
    }catch(error){
        console.error("Cannot create goal:",error);
    }
}

const getAllGoals=async()=>{
    try{
        const goals=await Goal.find();
        return goals;
    }catch(error){
        console.error("Cannot get goals:",error);
    }
}

const deleteGoalById=async(goalId)=>{
    try{
        const deletedGoal=await Goal.findByIdAndDelete(goalId);
        return deletedGoal;
    }catch(error){
        console.error("Error deleting goal",error);
    }
}

module.exports={addGoal,getAllGoals,deleteGoalById}