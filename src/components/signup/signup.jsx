import React from "react";
import Bground from "../../assests/iconsnvectors/BGround.svg";
import SearchJob from "../../assests/iconsnvectors/searchjob.png";
import "./signup.css";
import GoogLe from '../../assests/iconsnvectors/Google.svg';
import LinkedIn from '../../assests/iconsnvectors/linkedin.svg';
import { Link } from "react-router-dom";

const Company_Signup = () => {
  return (
    <div
      className="BKground"
      style={{ backgroundImage: `url(${Bground})`, height: "99vh" }}
    >
      <div className="self_container_rs">
        <div className="JObSearch_rs">
          <img src={SearchJob} alt="text" style={{ width: 450, height: 450 }}/>
        </div>
        <div className="log_details_rs">
          <h2><span className="Head_rs">Get started</span></h2>
          <div className="Signups_btns">
          <div className="signinGoogle_rs">
              <button className="SignIns_btn"><img src={GoogLe} alt="text" style={{ width: 13, height: 10 }}/> Signup with <span className="text_rs">Google</span></button>
            </div>
            <div className="signinGoogle_rs">
              <button className="SignIns_btn"><img src={LinkedIn} alt="text" style={{ width: 8, height: 9 }}/> Signup with <span className="text_rs">Linkedin</span></button>
            </div>
            </div>
          <div className="signup_Details_rs">
            <div className="Entries_rs">
              Full number
              <input type="text" placeholder="Enter company name" style = {{height:33, width:250 }}/>
            </div>
            <div className="Entries_rs">
              Mobile number
              <input type="number" placeholder="Enter mobile number" style = {{height:33, width:250}}/>
            </div>
            <div className="Entries_rs">
              Email-id
              <input type="text" placeholder="Enter email id" style = {{height:33, width:250}}/>
            </div>
            <div className="Entries_rs">
              Work status
              <div className="duration">
              <button className="duration_sp">I'm experienced</button>
              <button className="duration_sp">I'm a fresher</button>
              </div>
            </div>
            <div className="Entries_sp">
              Resume
              <div className="res_option">
              <button  className="resume_sp">Upload resume</button>
              </div>          
              </div>
            <div className="Entries_rs">
               Set Password
              <input type="password" placeholder="Set password" style = {{height:33, width:250}}/>
            </div>
            <div className="Entries_rs"><div className="Terms_rs">By clicking Register,you agree to the <span className="TnC_rs"> terms and conditions </span> &  
             <span className="TnC_rs"> privacy policy </span> of jobsslate.com</div>
             </div>
            <div className="job_alerts_rs">
              <Link to="/info" className="alert_btn_rs">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company_Signup;
