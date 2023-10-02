import {Routes,Route} from 'react-router-dom'
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//pages
import Home from './pages/Home/Home'
import { Exercises } from './pages/Exercises/Exercises';
import { Goals } from './pages/Goals/Goals';
import { Foods } from './pages/Foods/Foods';

//components
import {Sidebar} from './components/Sidebar/Sidebar'


function App() {

  return (
    <div className='container'>
      <Sidebar/>
      <div className="App">
          <ToastContainer
          position="bottom-right"
          autoClose="400"
          closeOnClick="true"
          draggable="true"
          borderRadius="10px"
        />      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/exercises' element={<Exercises/>} />
          <Route path='/goals' element={<Goals/>} />
          <Route path='/foods' element={<Foods/>}/>
        </Routes>
      </div>
    </div>
    
  );
}

export default App;
