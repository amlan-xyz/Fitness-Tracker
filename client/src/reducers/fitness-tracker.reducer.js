const initialState={
    exercises:[],
    foods:[],
    goals:[],
    loading:false,
    error:null
}

const fitnessTrackerReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_ENTRY_FAILURE":
            return{
                ...state,
                loading:false,
                error:"Error fetching or adding data"
            }
        case "ADD_EXERCISE_SUCCESS":
            return {
                ...state,
                exercises:[...state.exercises,action.payload],
                loading:false,
                error:null
            }
        case "ADD_FOODS_SUCCESS":
            return{
                ...state,
                foods:[...state.foods,action.payload],
                loading:false,
                error:null
            }
        case "ADD_GOALS_SUCCESS":
            return{
                ...state,
                goals:[...state.goals,action.payload],
                loading:false,
                error:null
            }
        case "FETCH_DATA_LOADING":
            return{
                ...state,
                loading:true
            }
        case "FETCH_EXERCISE_SUCCESS":
            return{
                ...state,
                exercises:action.payload,
                loading:false,
                error:null
            }
        case "FETCH_EXERCISE_FAILURE":
            return{
                ...state,
                loading:false,
                error:"Error fetching exercise data"
            }
        case "FETCH_FOODS_SUCCESS":
            return{
                ...state,
                foods:action.payload,
                loading:false,
                error:null
            }
        case "FETCH_FOODS_FAILURE":
            return{
                ...state,
                loading:false,
                error:"Error fetching foods data"
            }
        case "FETCH_GOALS_SUCCESS":
            return{
                ...state,
                goals:action.payload,
                loading:false,
                error:null
            } 
        case "FETCH_GOALS_FAILURE":
            return{
                ...state,
                loading:false,
                error:"Error fetching goals data"
            }
        case "DELETE_EXERCISE_SUCCESS":
            return {
                ...state,
                exercises:state.exercises.filter(({_id})=>_id!==action.payload._id),
                loading:false,
                error:null
            }
        case "DELETE_EXERCISE_FAILURE":
            return{
                ...state,
                loading:false,
                error:"Error deleting exercise data"
            }
        case "DELETE_FOOD_SUCCESS":
            return {
                ...state,
                foods:state.foods.filter(({_id})=>_id!==action.payload._id),
                loading:false,
                error:null
            }
        case "DELETE_FOOD_FAILURE":
            return{
                ...state,
                loading:false,
                error:"Error deleting food data"
            }
        case "DELETE_GOAL_SUCCESS":
            return {
                ...state,
                goals:state.goals.filter(({_id})=>_id!==action.payload._id),
                loading:false,
                error:null
            }
        case "DELETE_GOAL_FAILURE":
            return{
                ...state,
                loading:false,
                error:"Error deleting goal data"
            }
        default:
            return state;
    }
}

export default fitnessTrackerReducer;