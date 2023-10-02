import React,{ useState} from 'react'
import {useDispatch} from 'react-redux'

//utils
import { addEntry } from '../../actions/add-entry.actions';

//icons
import { AiOutlineClose } from 'react-icons/ai';
import { MdAdd } from 'react-icons/md';

import './Form.css'

export const AddExercise=()=>{
    const dispatch=useDispatch();
    const [name,setName]=useState('');
    const [duration,setDuration]=useState('')
    const [calories,setCalories]=useState('');

    const [show ,setShow]=useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addEntry({exerciseName:name,exerciseDuration:duration,caloriesBurned:calories,entryType:"exercises"}));
        setName('');
        setDuration('');
        setCalories('');
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
                        <label htmlFor="">Exercise Name</label>
                        <input type="text" value={name}  onChange={(e) =>setName(e.target.value)} />
                        <label htmlFor="">Exercise Duration</label>
                        <input type="number" value={duration} onChange={(e)=>setDuration(e.target.value)}/>
                        <label htmlFor="">Calories Burned</label>
                        <input type="number" value={calories} onChange={(e)=>setCalories(e.target.value)} />
                        <button className='primary__btn' onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        }
        </>
    )
}