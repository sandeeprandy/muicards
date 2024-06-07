import React from "react";
import HomePage from "./Pages/Homepage";
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom" 
import Rigister from "./Components/Rigister" 
import Login from "./Components/Login"



const app = () => {
  return (
    <div>
      <Router > 
        <Routes >
          <Route path="/" element={<Rigister />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Homepage" element= {<HomePage />} />
        </Routes>

      </Router>
     
    </div>
  );
};

export default app
