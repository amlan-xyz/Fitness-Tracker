import { toast } from "react-toastify";

export const fetchExercises=()=>async(dispatch)=>{
    try{
        dispatch({type:"FETCH_DATA_LOADING"});
    const response=await fetch("https://fitness-tracker-api.theweird0ne.repl.co/api/exercises"
    );
        const {data}=await response.json();
        dispatch({type:"FETCH_EXERCISE_SUCCESS",payload:data});
    }catch(error){
        console.error("Error fetching data:", error);
        dispatch({ type: "FETCH_EXERCISE_FAILURE" });
        toast.error("Error fetching exercises")
    }
}

export const deleteExercise=(exerciseId)=>async(dispatch)=>{
    const url=`https://fitness-tracker-api.theweird0ne.repl.co/api/exercises/${exerciseId}`;
    try{
        const response=await fetch(url,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            },
        });
        const {data}=await response.json();
        dispatch({type:"DELETE_EXERCISE_SUCCESS",payload:data});
        toast.success("Exercise deleted")
    }catch(error){
            dispatch({ type: "DELETE_EXERCISE_FAILURE"});
            toast.error("Error deleting exercise")
    }
}