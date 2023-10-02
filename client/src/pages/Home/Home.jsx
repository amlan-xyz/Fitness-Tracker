import './Home.css'

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

//actions
import { fetchExercises } from '../../actions/exercise.actions';
import { fetchFoods } from '../../actions/foods.actions';
import { fetchGoals } from '../../actions/goals.actions';
//icons
import {BsFire} from 'react-icons/bs'
import {PiBowlFoodFill} from 'react-icons/pi'
import {LuGoal} from 'react-icons/lu'
import {GoGoal} from 'react-icons/go'
import { Loader } from '../../components/Loader/Loader';



const Home=()=>{
    const dispatch=useDispatch();
    const foods=useSelector(state=>state.foods);
    const exercises=useSelector(state=>state.exercises);
    const goals=useSelector(state=>state.goals)

    const loading=useSelector(state=>state.loading)

    const[caloriesBurned,setCaloriesBurned]=useState(0);
    const [caloriesConsumed,setCaloriesConsumed]=useState(0);
    const [goalAchieved,setGoalAchieved]=useState(0);
    const [goalToAchieve,setGoalToAchieved]=useState(0);


    useEffect(()=>{
        dispatch(fetchExercises());
        dispatch(fetchFoods());
        dispatch(fetchGoals());
    },[dispatch]);

    useEffect(()=>{
        setCaloriesBurned(exercises.reduce((acc,curr)=>acc+curr.calories_burned,0));
        setCaloriesConsumed(foods.reduce((acc,curr)=>acc+curr.calories,0))
        setGoalAchieved(goals.reduce((acc,curr)=>curr.goal_status==="completed"?acc+curr.target_calories:acc
        ,0));
        setGoalToAchieved(goals.reduce((acc,curr)=>curr.goal_status==="pending"|| curr.goal_status==="in-progress"?acc+curr.target_calories:acc
        ,0))
    },[foods,exercises,goals])

    return(
        <section className="section">
            {
                loading===true?<Loader/>:<>
                <h1 className="section__header">
                Dashboard
            </h1>
            <div className="section__container">
                <ul className="home__calories--counter">
                    <li className="home__calories--counter-card">
                        <header className="home__calories--counter-icon">
                            <BsFire/>
                        </header>
                        <p className='home__calories--counter-value red'>{caloriesBurned}</p>
                        <span className='home__calories--counter-details'>Burned</span>
                    </li>
                    <li className="home__calories--counter-card">
                    <header className="home__calories--counter-icon">
                            <PiBowlFoodFill/>
                        </header>
                        <p className='home__calories--counter-value blue'>{caloriesConsumed}</p>
                        <span className='home__calories--counter-details'>Consumed</span>
                    </li>
                    <li className="home__calories--counter-card">
                    <header className="home__calories--counter-icon">
                            <LuGoal/>
                        </header>
                        <p className='home__calories--counter-value green'>{goalAchieved}</p>
                        <span className='home__calories--counter-details'>Achieved</span>
                    </li>
                    <li className="home__calories--counter-card">
                    <header className="home__calories--counter-icon">
                            <GoGoal/>
                        </header>
                        <p className='home__calories--counter-value yellow'>{goalToAchieve}</p>
                        <span className='home__calories--counter-details'>Goal</span>
                    </li>
                </ul>
            </div>
                </>
            }
        </section>
    )
}

export default Home;