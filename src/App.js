import React, {Suspense } from "react";
import { Home } from "./Component/Homee/Home";
import Login from "./Component/Login/Login";
import Parent from "./parentchild/Parent";
import Signup from "./Component/Signup/Signup";
import { Routes, Route  } from "react-router-dom";
import Apicall from "./Fetch and axious/Apicall";
import Posting from "./Fetch and axious/Posting";
import Editing from "./Fetch and axious/Editing";
import Clickcounter from "./HOC/Clickcounter";
import Hovercounter from "./HOC/Hovercounter";
import Hoccounter from "./HOC/Hoccounter";
import Tiffinsite from "./Redux/Tiffinsite";
import Postux from "./Redux/Postux";
import Editex from "./Redux/Editex";

import Postsidedish from "./Redux/Postsidedish";
import Editsidedish from "./Redux/Editsidedish";
// import Sidedish from "./Redux/Sidedish";
const Sidedish = React.lazy(() => import("./Redux/Sidedish"));

const UpdatedClickcounter = Hoccounter(Clickcounter);
const UpdatedHovercounter = Hoccounter(Hovercounter);

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading....</div>}>
      <Routes>
        
        
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Parent" element={<Parent />} />
        <Route path="/Apicall" element={<Apicall />} />
        <Route path="/Posting" element={<Posting />} />
        <Route path="/Editing/:id" element={<Editing />} />
        <Route path="/Clickcounter" element={<UpdatedClickcounter name="Jagdish" />}/>
        <Route path="/Hovercounter"element={<UpdatedHovercounter name="johnDavid" />}/>
        <Route path="/tiffinsite" element={<Tiffinsite />} />
        <Route path="/postux" element={<Postux />} />
        <Route path="/editex/:id" element={<Editex />} />
        <Route path="/postsidedish" element={<Postsidedish />} />
        <Route path="/editsidedish/:id" element={<Editsidedish />} />
        <Route path="/sidedish" element={<Sidedish />} />
      
        
        
      </Routes>
      </Suspense>
     
    </div>
  );
}

export default App;
