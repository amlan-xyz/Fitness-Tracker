import React,{ useState} from 'react'
import {useDispatch} from 'react-redux'

import { AiOutlineClose } from 'react-icons/ai';
import { MdAdd } from 'react-icons/md';

//utils
import { addEntry } from '../../actions/add-entry.actions';

import './Form.css'

export const AddGoal=()=>{
    const dispatch=useDispatch();
    const [goalName,setGoalName]=useState('');
    const [goalDescription,setGoalDescription]=useState('');
    const [targetDate,setTargetDate]=useState('');
    const [targetCalories,setTargetCalories]=useState('');
    const [status,setStatus]=useState('')
    const [show,setShow]=useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addEntry({goalName:goalName,goalDescription:goalDescription,targetDate:targetDate,targetCalories:targetCalories,goalStatus:status,entryType:'goals'}))
        setGoalName('');
        setGoalDescription('');
        setTargetDate('');
        setTargetCalories('');
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
                    <label htmlFor="">Goal Name</label>
                    <input type="text" value={goalName} onChange={(e) =>
                       setGoalName(e.target.value)
                    } />
                    <label htmlFor="">Goal Description</label>
                    <textarea id="" cols="30" rows="5" value={goalDescription} onChange={(e)=>
                      setGoalDescription(e.target.value)}></textarea>
                    <label htmlFor="">Target Date</label>
                    <input type="date" value={targetDate} onChange={(e)=>setTargetDate(e.target.value)} />
                    <label htmlFor="">Target Calories</label>
                    <input type="number" value={targetCalories} onChange={(e)=>setTargetCalories(e.target.value)} />
                    <label htmlFor="">Goal Status</label>
                    <select name="" value={status} id="" onChange={(e)=>setStatus(e.target.value)}>
                      <option value="in-progress">In-progress</option>
                      <option value="completed">Completed</option>
                    </select>
                    <button className='primary__btn' onClick={handleSubmit}>Submit</button>
            </form>
            </div>
            </div>
            }
      </>      
    )
}