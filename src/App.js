
import { Home } from './Component/Homee/Home';
import Login from './Component/Login/Login';
import Parent from './parentchild/Parent';
import Signup from './Component/Signup/Signup';
import { Routes, Route, Link } from "react-router-dom";



function App() {
  return (
     
  // <Signup/>
  <div>
  <Routes>
  <Route path="/" element={<Signup/>} />
  <Route path='/Login' element={<Login/>} />
  <Route path="/Home" element={<Home/>} />
  <Route path='/Parent' element={<Parent/>}/>
 </Routes>
 </div>
    
  );
}

export default App;
