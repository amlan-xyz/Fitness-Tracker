import {  toast } from 'react-toastify';

export const addEntry=(entry)=>async(dispatch)=>{
    const url=`https://fitness-tracker-api.theweird0ne.repl.co/api/${entry.entryType}`;
    try{
        const response=await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(entry)
        });
        const {data}=await response.json();
        if(response.status===201){
            if(entry.entryType==="exercises"){
                dispatch({ type: "ADD_EXERCISE_SUCCESS", payload:data });
                toast.success("Exercise Added")
            }else if(entry.entryType==="foods"){
                dispatch({ type: "ADD_FOODS_SUCCESS", payload:data });
                toast.success("Food Added")
            }else{
                dispatch({ type: "ADD_GOALS_SUCCESS", payload:data });
                toast.success("Goal Added")
            }
        }else{
            throw new Error();
        }
        
    }catch(error){
        console.error("Error adding data",error);
        dispatch({type:"ADD_ENTRY_FAILURE"})
    }
}