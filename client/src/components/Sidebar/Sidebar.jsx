import {Link} from 'react-router-dom'

//icons
import {TbHealthRecognition,TbLayoutDashboard} from 'react-icons/tb'
import {MdSportsGymnastics} from 'react-icons/md'
import {PiBowlFood} from 'react-icons/pi'
import {GiStairsGoal} from 'react-icons/gi'

import './Sidebar.css'

export const Sidebar=()=>{
    return(
        <div className="sidebar">
            <div className="sidebar__container">
                <header className='sidebar__header'>My Fitness Tracker <TbHealthRecognition/> 
                </header>
                <ul className="sidebar__list">
                    <li className="sidebar__links">
                        <span className='sidebar__icon'><TbLayoutDashboard/></span>
                        <Link to='/' className='sidebar__item'>Dashboard         </Link>
                        
                    </li>
                    <li className="sidebar__links">
                        <span className='sidebar__icon'><MdSportsGymnastics/></span>
                        <Link to='/exercises' className='sidebar__item'>My Exercises</Link>
                    </li>
                    <li className="sidebar__links">
                        <span className='sidebar__icon'><PiBowlFood/></span>
                        <Link to='/foods' className='sidebar__item'>My Diet</Link>
                    </li>
                    <li className="sidebar__links">
                        <span className='sidebar__icon'><GiStairsGoal/></span>
                        <Link to='/goals' className='sidebar__item'>My Goals</Link>
                    </li>
                </ul>
            </div>
        </div>
        
    )
    
}