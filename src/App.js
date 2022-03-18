
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
  <Route path="/home" element={<Home/>} />
 </Routes>
 </div>
    
  );
}

export default App;
