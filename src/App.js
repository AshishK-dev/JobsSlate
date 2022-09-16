import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Locate from "./components/chooseyourcountry/locate";
import Jobdescription from "./components/jobdescription/jobdescription";
import Job_suggestions from "./components/joblists/joblists";
import Searchbar from "./components/jobsearch/search_bar/searchbar";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/Profile/profile";
import User_Signup from "./components/signup/signup";
import IntialInfo from "./components/registeration_process/basicDetails/basicDetails";
import Emp_info from "./components/registeration_process/employment/employment";
import EduInfo from "./components/registeration_process/education/educaion";
import Head_pref from "./components/registeration_process/laststep/head_pref"; 
import LandPage from "./components/newlandingpage/lanPage";
import Dlogin from "./components/directLog/dlogin";
const App = () => {
  return (
    <div className="main-app-container">
      <Navbar/>
       <BrowserRouter>
      <Routes>
      <Route path="/" element={<Locate/>}/>
      <Route path="/job-suggestion" element={<Job_suggestions/>}/>
      <Route path="/job-description" element={<Jobdescription/>}/>
      <Route path="/search" element={<Searchbar/>}/>
      <Route path="/initial_info" element={<IntialInfo/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/signup" element={<User_Signup/>}/>
      <Route path="/info" element={<IntialInfo/>}/>
      <Route path="/emp_info" element={<Emp_info/>}/>
      <Route path="/EduInfo" element={<EduInfo/>}/>
      <Route path="/head" element={<Head_pref/>}/>
      <Route path="/profile" element={<Profile/>}/>
        
    
      </Routes>
      </BrowserRouter>  
{/*        
       <Navbar/>
       <Profile/> */}
    
            </div>
  );
};

export default App;
