import React from 'react';
import './dlogin.css';
import Bground from "../../assests/iconsnvectors/BGround.svg";
import SearchJob from "../../assests/iconsnvectors/searchjob.png";
import UserIcon from '../../assests/jobsSlate icons/Icons_user.png'
const Dlogin = () => {
  return (
    <div
    className="BKground"
    style={{ backgroundImage: `url(${Bground})`, height: "99vh" }}
  >
    <div className="self_container_rs">
      <div className="JObSearch_rs">
        <img src={SearchJob} alt="text" style={{ width: 350, height: 350 }}/>
      </div>
      <div className="log_details_dl">
        {/* <div className="loginDirect"><span className="smallfont">Alredy have an account?<span className="dLog">Login</span></span></div> */}
        {/* <h2><span className="Head_rs">Get started</span></h2> */}
        {/* <div className="Signups_btns">
        <div className="signinGoogle_rs">
            <button className="SignIns_btn"><img className="Gsign" src={GoogLe} alt="text" style={{ width: 15, height: 15 }}/><span className="s_button_up"> Signup with <span className="text_rs">Google</span></span></button>
          </div>
          <div className="signinGoogle_rs">
            <button className="SignIns_btn"><img className="Gsign" src={LinkedIn} alt="text" style={{ width: 15, height: 15 }}/><span className="s_button_up"> Signup with <span className="text_rs">Linkedin</span></span></button>
          </div>
          </div> */}
          {/* <div className="line_sp">
          <div className="line_sm"></div>
          <div className="option_sp"><span className="smallfont">or</span></div>
          <div className="line_sm"></div>
          </div> */}
          <div className="signup_Details_rs">
          <div className="Entries_rs">
          <span className="fSize"> Email</span>
          <div className="enclosed">
              <img className="Usign" src={UserIcon} alt="text" style={{ width: 15, height: 15 }}/>
              <input className="ip_signup" type="text" placeholder="Enter your name" style = {{height:30, width:270 }} />
              </div>
          </div>
          <div className="Entries_rs">
          <span className="fSize"> Password</span>
          <div className="enclosed">
              <img className="Usign" src={UserIcon} alt="text" style={{ width: 15, height: 15 }}/>
              <input className="ip_signup" type="text" placeholder="Enter your name" style = {{height:30, width:270 }} />
              </div>
          </div>
          
          {/* <div className="Entries_rs">
            <span className="fSize"> Full name</span>
            <input className="ip_signup" type="text" placeholder="Enter" style = {{height:30, width:270 }} />
          </div> */}

          <div className="diffOption">or</div>
          <div className="Entries_rs">
          <span className="fSize"> Mobile number</span>
          <div className="enclosed">
              <img className="Usign" src={UserIcon} alt="text" style={{ width: 15, height: 15 }}/>
              <input className="ip_signup" type="text" placeholder="Enter your name" style = {{height:30, width:270 }} />
              </div>          </div>
          <div className="Entries_rs">
          <span className="fSize"> One time password</span>
          <div className="enclosed">
              <img className="Usign" src={UserIcon} alt="text" style={{ width: 15, height: 15 }}/>
              <input className="ip_signup" type="text" placeholder="Enter your name" style = {{height:30, width:270 }} />
              </div>
          </div>
          {/* <div className="Entries_rs">
          <span className="fSize"> Work status</span>
            <div className="duration">
            <button className="duration_sp"><span className="exp_sp"> <img className="Gsign" src={Exp} alt="text" style={{ width: 10, height: 10 }}/> I'm experienced</span></button>
            <button className="duration_sp"><span className="exp_sp"><img className="Gsign" src={Fresher} alt="text" style={{ width: 10, height: 10 }}/>  I'm a fresher</span></button>
            </div>
          </div> */}
          {/* <div className="Entries_sp">
          <span className="fSize"> Resume</span>
            <div className="res_option">
            <div className="res_sp"><button  className="resume_sp">Upload resume</button></div>
            <div className="for_sp"><span className="smallfont">DOC, DOCx, PDF, | Max: 2 MB</span></div>
            </div>          
            </div> */}
{/*      
          <div className="Entries_rs"><div className="Terms_rs">By clicking Register,you agree to the <span className="TnC_rs"> terms and conditions </span> &  
           <span className="TnC_rs"> privacy policy </span> of jobsslate.com</div>
           </div> */}
          <div className="job_alerts_rs">
            <button to="/info" className="alert_btn_dl" style={{ textDecoration: 'none' }}>Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dlogin
