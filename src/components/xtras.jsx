import React from 'react'
import "./basicDetails.css"
import Bground from "../../assests/iconsnvectors/BGround.svg";
import { useState } from 'react';

const IntialInfo = () => {
  const [phase, setPhase] = useState("basic")


  const form1=(
    <h1>form 1</h1>
  )

  const form2 =()=>{
    return (
      <h1>Form 2</h1>
    )
  }
  return (
    <div
    className="BKground"
    style={{ backgroundImage: `url(${Bground})`, height: "99vh" }}>
      <div className="main_container_bd">
        <div className="progression_list_bd">
           //{phase.length ===0 && form1}
           {phase ==='basic' && form2()}
        </div>
        <div className="basic_details_bd"></div>
      </div>
    </div>
 /*import React from "react";
import Bground from "../../assests/iconsnvectors/background@72x.png";
import SearchJob from "../../assests/iconsnvectors/searchjob.png";
import "./signup.css";

const SignupPage = () => {
  return (
    <div
      className="BKground"
      style={{ backgroundImage: `url(${Bground})`, height: "120vh" }}
    >
      <div className="self_container">
        <div className="JObSearch">
          <img src={SearchJob} alt="text" />
        </div>
        <div className="log_details">
          <h2>Get started</h2>

          <div className="signup_Details">
            <div className="s_FName">
              First Name
              <input type="text" placeholder="Enter first name" />
            </div>
            <div className="s_LName">
              Last name
              <input type="text" placeholder="Enter last name" />
            </div>
            <div className="s_Mobnum">
              Mobile number
              <input type="number" placeholder="Enter mobile number" />
            </div>
            <div className="s_Email">
              Email
              <input type="text" placeholder="Enter email id" />
            </div>
            <div className="s_Password">
              Set password
              <input type="password" placeholder="Enter password" />
            </div>
            <div className="s_Rpassword">
              Confirm password
              <input type="password" placeholder="Enter password" />
            </div>
            <div className="job_alerts">
              <button className="alert_btn">Signup now</button>
            </div>
          </div>
        </div>
      </div>
    </div>







this is the code for searchbar

    /* <div className = 'first_half'>
        <div className = 'lp_logo'>
            <img src = {Landingpage} alt = 'text'  style={{ width: 290, height: 280 }}/>
        </div>
        <div className="head_text_js">
          <h1>Search between <br/>more than<span className='specific_js'> 13.8 million<br/></span>
            open <span className='specific_js'>jobs. </span></h1>  
        </div>
    </div>
    <div className="search-box-container_js">
    <div className="search-box_js"> 
    <div className="magnify"> <img src = {Magnifier} style={{ width: 15, height:15}}/></div>
    <div className="job_profile"><input type = "text" placeholder=' Enter job title' style={{border:0}}/></div>
    <div className="job_loc12"> <img src = { Location_emoji }  style={{ width: 15, height:15}}/></div>
    <div className='job_area'><input type = "text" placeholder=' Enter your location' style={{border:0}}/></div>
    <div className="job_search"><button className='search_btn_js'>Search</button></div>
   
    </div>
    </div>
    <div className="second_half_js">
      <div className="second_heading"><h2>Latest recruitment</h2></div>
      
      <div className="suggestions_js">   <h3>Java developer with AWS cloud</h3>
      <div className="job_details"><button className='details_btn_js'>View details</button></div>
      <div className="company_logo_js"><img src={NexGen} style={{ height: 100 }} /></div>
      <div className="line_js"></div>   
    </div>
    <div className="suggestions_2_js">   <h3>Java developer with AWS cloud</h3>
    <div className="job_details"><button className='details_btn_js'>View details</button></div>
      <div className="company_logo_2_js"><img src={NexGen} style={{ height: 100 }} /></div>
      <div className="line_2_js"></div>
      
      </div>
      
    </div> */
  );
};

export default SignupPage; */





 
  )
}

export default IntialInfo