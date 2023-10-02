import { toast } from "react-toastify";

export const fetchGoals=()=>async(dispatch)=>{
    try{
        dispatch({type:"FETCH_DATA_LOADING"});
        const response=await fetch("https://fitness-tracker-api.theweird0ne.repl.co/api/goals");
        const {data}=await response.json();
        dispatch({type:"FETCH_GOALS_SUCCESS",payload:data})
    }catch(error){
        console.error("Error fetching data:", error);
        dispatch({ type: "FETCH_GOALS_FAILURE" });
        toast.error("Error fetching goals")
    }
}

export const deleteGoals=(goalId)=>async(dispatch)=>{
    const url=`https://fitness-tracker-api.theweird0ne.repl.co/api/goals/${goalId}`;
    try{
        const response=await fetch(url,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            },
        });
        const {data}=await response.json();
        dispatch({type:"DELETE_GOAL_SUCCESS",payload:data});
        toast.success("Error deleting goal")
    }catch(error){
            dispatch({ type: "DELETE_GOAL_FAILURE"});
            toast.error("Error deleting goal")
    }
}