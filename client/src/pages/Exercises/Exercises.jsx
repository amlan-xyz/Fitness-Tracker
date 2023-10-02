import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {fetchExercises,deleteExercise}  from '../../actions/exercise.actions'


//components
import { AddExercise } from "../../components/Forms/ExerciseEntryForm";

//icons
import {AiOutlineDelete } from 'react-icons/ai';
import {GiWeightLiftingUp} from 'react-icons/gi'

import './Exercises.css'
import { Loader } from "../../components/Loader/Loader";

export const Exercises=()=>{
    const dispatch=useDispatch();
    const exercises=useSelector(state=>state.exercises)
    const loading=useSelector(state=>state.loading);

    const handleDelete=(exerciseId)=>{
        dispatch(deleteExercise(exerciseId));
    }

    useEffect(()=>{
        dispatch(fetchExercises());
    },[dispatch]);

    return(
        <section className="section">
            <header className="section__header">
                <p className="section__header-p">Exercises</p>
            </header>

            <AddExercise/>
                        
            <div className="section__container">
            {
                loading===true?<Loader/>:<ul className="list">
                {
                    exercises && exercises.map(exercise=>(
                        <li className="list-item" key={exercise._id}>
                            <button onClick={()=>handleDelete(exercise._id)}><AiOutlineDelete/></button>
                            <h3>{exercise.exercise_name} <span><GiWeightLiftingUp/></span></h3>
                            <p>{exercise.duration} reps</p>
                            <p>{exercise.calories_burned} calories</p>
                        </li>
                    ))
                }
            </ul>
            }
            </div>
        </section>
    )

}

