import { toast } from "react-toastify";

export const fetchFoods=()=>async(dispatch)=>{
    try{
        dispatch({type:"FETCH_DATA_LOADING"});
        const response=await fetch("https://fitness-tracker-api.theweird0ne.repl.co/api/foods");
        const {data}=await response.json();
        dispatch({type:"FETCH_FOODS_SUCCESS",payload:data});
    }catch(error){
        console.error("Error fetching data",error);
        dispatch({type:"FETCH_FOODS_FAILURE"})
        toast.error("Error fetching foods")
    }
}

export const deleteFoods=(foodId)=>async(dispatch)=>{
    const url=`https://fitness-tracker-api.theweird0ne.repl.co/api/foods/${foodId}`;
    try{
        const response=await fetch(url,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            },
        });
        const {data}=await response.json();
        dispatch({type:"DELETE_FOOD_SUCCESS",payload:data});   
        toast.success("Food deleted");    
    }catch(error){
            dispatch({ type: "DELETE_FOOD_FAILURE"});
            toast.error("Error deleting food")
    }
}