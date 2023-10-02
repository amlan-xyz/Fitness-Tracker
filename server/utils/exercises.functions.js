const Exercise=require('../models/exercises.model');

const addExercise=async(exerciseDetails)=>{
    const {exerciseName,exerciseDuration,caloriesBurned}=exerciseDetails;
    try{
        const newExercise={
            exercise_name:exerciseName,
            duration:Number(exerciseDuration),
            calories_burned:Number(caloriesBurned)
        }
        const exercise=new Exercise(newExercise);
        await exercise.save();
        return exercise;
    }catch(error){
        console.error("Error adding exercise:",error);
    }
}

const findAllExercises=async()=>{
    try{
        const exercises=await Exercise.find({});
        if(exercises){
            return exercises;
        }else{
            throw "No exercises found"
        }
    }catch(error){
        console.error("Error finding all exercises:",error);
    }
}

const deleteExerciseById=async(exerciseId)=>{
    try{
        const exercise=await Exercise.findByIdAndDelete(exerciseId);
        if(exercise){
            return exercise;
        }else{
            throw "Exercise not found";
        }
    }catch(error){
        console.error("Error deleting exercise:",error);
    }
}


module.exports={addExercise,findAllExercises,deleteExerciseById}