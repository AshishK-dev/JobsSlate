import React from 'react'
import "./basicDetails.css"
import Bground from "../../../assests/iconsnvectors/BGround.svg";
import Dummy from "../../../assests/iconsnvectors/dummy.png";
import { Link } from 'react-router-dom';

const IntialInfo = () => {
  return (
    <div
    className="BKground"
    style={{ backgroundImage: `url(${Bground})`, height: "100vh" }}>
      <div className="main_container_bd">
        <div className="progression_list_bd">
          <div className="wholeBar">
          <div className="firstRound bggreen" ></div>
          <div className="firstBar"></div>
          <div className="firstRound " ></div>
          <div className="firstBar"></div>
          <div className="firstRound " ></div>
          <div className="firstBar"></div>
          <div className="firstRound " ></div>
          </div>
          </div> 
          
          <div className="secondary_container_bd">
            <div className="usb_bd">
            <div className="bDetails">
              <span className='head_bd'>Add your basic details</span>
            </div>
            <div className="secHead">
              <span className='sHead'>Update your personal details help recruiters contact you</span>
            </div>
            <div className="pic_bD">
              <img className='dummy_bd' src={Dummy} alt='text' style={{ width: 80, height:80}} />
            </div>
            <div className="entries_bD">
              <div className="basicEntries_bd">
                <div className="fullName_bd">
                  <span className='e_bd'> Full name</span>
                  <input className='ip_bd' type="text" placeholder="Vicky rakesh roy" style = {{height:30, width:265 }}/>
                </div>
                <div className="fullName_bd">
                <span className='e_bd'> Mobile no.</span>
                  <input className='ip_bd' type="number" placeholder="+91 - 12345678910" style = {{height:30, width:265 }}/>
                </div>
                <div className="fullName_bd">
                <span className='e_bd'> Email</span>
                  <input className='ip_bd' type="email" placeholder="Vrr@gmail.com" style = {{height:30, width:265 }}/>
                </div>
              </div>
              <div className="changePass_bd">
                <span className='cPass'> Change password</span>
                </div>
                <div className="passCode_bd">
              <div className="entryPassword_bd">
              <span className='p_bd'> Full name</span>
                  <input className='ip_bd' type="text" placeholder="*************" style = {{height:30, width:265 }}/>
              </div>
              <div className="entryPassword_bd">
              <span className='p_bd'> Full name</span>
                  <input className='ip_bd' type="text" placeholder="*************" style = {{height:30, width:265 }}/>
              </div>
              </div>
              
            </div>
            <div className="saveNcancel_bd">
              <div className="save_btn_bd">
                <Link to="/emp_info" className='Save_BD'>Save</Link>
              </div>
              <div className="cancel_btn_bd">
                <button className='Cancel_BD'>Cancel</button>
              </div>
            </div>
          </div>
          </div>  
          </div>
    </div>
    
  
  )
}

export default IntialInfo