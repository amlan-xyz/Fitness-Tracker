import React,{ useState} from 'react'
import {useDispatch} from 'react-redux'

//utils
import { addEntry } from '../../actions/add-entry.actions';

import { AiOutlineClose } from 'react-icons/ai';
import { MdAdd } from 'react-icons/md';

import './Form.css'

export const AddFood=()=>{
    const dispatch=useDispatch();
    const [foodName,setFoodName]=useState('');
    const [calories,setCalories]=useState('');
    const [carbohydrates,setCarbohydrates]=useState('');
    const [protein,setProtein]=useState('');
    const [fat,setFat]=useState('');
    const [show,setShow]=useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addEntry({foodName:foodName,calories:calories,carbohydrates:carbohydrates,protein:protein,fat:fat,entryType:"foods"}));
        setCalories('');
        setFoodName('');
        setCarbohydrates('');
        setFat('');
        setProtein('')
        setShow(false);
    }

    return(
        <>
            <button className='entry__form-btn-add' onClick={()=>setShow(true)}>
                <span>Add</span>
                <MdAdd/>
            </button>
            {
                 show &&
                 <div className="modal">
                 <div className="modal_wrapper"></div>
                     <div className="modal_container">
                         <button className='entry__form-btn-close' onClick={()=>setShow(false)}><AiOutlineClose/></button>
                <form className='entry__form' action="">
                    <label htmlFor="">Food Name</label>
                    <input type="text" value={foodName} onChange={(e)=>setFoodName(e.target.value)} />
                    <label htmlFor="">Calories</label>
                    <input type="number" value={calories} onChange={(e)=>setCalories(e.target.value)} />
                    <label htmlFor="">Protein</label>
                    <input type="number" value={protein} onChange={(e)=>setProtein(e.target.value)} />
                    <label htmlFor="">Carbohydrates</label>
                    <input type="number" value={carbohydrates} onChange={(e)=>setCarbohydrates(e.target.value)} />
                    <label htmlFor="">Fat</label>
                    <input type="number" value={fat} onChange={(e)=>setFat(e.target.value)} />
                    <button className='primary__btn' onClick={handleSubmit}>Submit</button>
                </form>
                </div>
            </div>
            }
            
        </>
    )
}