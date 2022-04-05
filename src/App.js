
import { Home } from './Component/Homee/Home';
import Login from './Component/Login/Login';
import Parent from './parentchild/Parent';
import Signup from './Component/Signup/Signup';
import { Routes, Route, Link } from "react-router-dom";

//import Reducers from './Redusercomponent/Reducers';

import Apicall  from './Fetch and axious/Apicall';
import Posting  from './Fetch and axious/Posting';
import Editing from './Fetch and axious/Editing';
import Clickcounter from './HOC/Clickcounter';
import Hovercounter from './HOC/Hovercounter';
import  Hoccounter from './HOC/Hoccounter';
import { useSelector } from 'react-redux';
import Tiffinsite from './Redux/Tiffinsite'


const UpdatedClickcounter =  Hoccounter(Clickcounter)
const UpdatedHovercounter =  Hoccounter(Hovercounter)



function App() {

  return (
     
  
  <div>
    <Routes>
      <Route path="/" element={<Signup/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path='/Parent' element={<Parent/>}/>
      {/* <Route path='/Reducer' element={<Reducers/>}/> */}
      <Route path='/Apicall' element={<Apicall/>}/>
      <Route path='/Posting' element={<Posting />}/>
      <Route path='/Editing/:id' element={<Editing/>}/>
      <Route path='/Clickcounter' element={<UpdatedClickcounter name="Jagdish" />}/>
      <Route path='/Hovercounter' element={<UpdatedHovercounter name="johnDavid"/>}/>
      <Route path='/tiffinsite' element={<Tiffinsite/>}/>
    </Routes>
  </div>
    
  );
}

export default App;
