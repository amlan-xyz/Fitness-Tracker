import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";

//components
import { AddFood } from "../../components/Forms/FoodEntryForm";

//icons
import {AiOutlineDelete  } from 'react-icons/ai';
import {PiBowlFoodFill} from "react-icons/pi"

//actions
import {fetchFoods,deleteFoods} from '../../actions/foods.actions'

import './Foods.css'
import { Loader } from "../../components/Loader/Loader";

export const Foods=()=>{
    const dispatch=useDispatch();
    const foods=useSelector(state=>state.foods)
    const loading=useSelector(state=>state.loading);

    const handleDelete=(foodId)=>{
        dispatch(deleteFoods(foodId));
    }

    useEffect(()=>{
        dispatch(fetchFoods());
    },[dispatch]);

    return(
        <section className="section">
            <header className="section__header">
                <p className="section__header-p">Foods</p>
            </header>
           
            <AddFood/>
       
            <div className="section__container">
            {
                loading===true?<Loader/>:<ul className="list">
                {
                    foods && foods.map(food=>(
                        <li className="list-item" key={food._id}>
                            <button onClick={()=>handleDelete(food._id)}><AiOutlineDelete /></button>
                            <h3>{food.food_name} <PiBowlFoodFill/> </h3>
                            <p className="underline">Macros</p>
                            <p>Protein : {food.protein}</p>
                            <p>Carbohydrates : {food.carbohydrates}</p>
                            <p>Fat : {food.fat}</p>
                        </li>
                    ))
                }
            </ul>
            }
            </div>
        </section>
    )

}

