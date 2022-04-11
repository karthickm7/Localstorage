import { Home } from "./Component/Homee/Home";
import Login from "./Component/Login/Login";
import Parent from "./parentchild/Parent";
import Signup from "./Component/Signup/Signup";
import { Routes, Route } from "react-router-dom";

//import Reducers from './Redusercomponent/Reducers';

import Apicall from "./Fetch and axious/Apicall";
import Posting from "./Fetch and axious/Posting";
import Editing from "./Fetch and axious/Editing";
import Clickcounter from "./HOC/Clickcounter";
import Hovercounter from "./HOC/Hovercounter";
import Hoccounter from "./HOC/Hoccounter";
import Tiffinsite from "./Redux/Tiffinsite";
import Postux from "./Redux/Postux";
import Editex from "./Redux/Editex";
import Sidedish from "./Redux/Sidedish";
import Postsidedish from "./Redux/Postsidedish";
import Editsidedish from "./Redux/Editsidedish";

const UpdatedClickcounter = Hoccounter(Clickcounter);
const UpdatedHovercounter = Hoccounter(Hovercounter);

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Parent" element={<Parent />} />

        <Route path="/Apicall" element={<Apicall />} />
        <Route path="/Posting" element={<Posting />} />
        <Route path="/Editing/:id" element={<Editing />} />
        <Route
          path="/Clickcounter"
          element={<UpdatedClickcounter name="Jagdish" />}
        />
        <Route
          path="/Hovercounter"
          element={<UpdatedHovercounter name="johnDavid" />}
        />
        <Route path="/tiffinsite" element={<Tiffinsite />} />
        <Route path="/postux" element={<Postux />} />
        <Route path="/editex/:id" element={<Editex />} />
        <Route path="/sidedish" element={<Sidedish />} />
        <Route path="/postsidedish" element={<Postsidedish />} />
        <Route path="/editsidedish/:id" element={<Editsidedish />} />
      </Routes>
    </div>
  );
}

export default App;
