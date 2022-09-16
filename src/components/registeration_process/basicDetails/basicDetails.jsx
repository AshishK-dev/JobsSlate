import React from 'react'
import "./basicDetails.css"
import Bground from "../../../assests/iconsnvectors/BGround.svg";
import Dummy from "../../../assests/iconsnvectors/dummy.png";
import UserIcon from '../../../assests/jobsSlate icons/Icons_user.png';
import MobIcon from '../../../assests/jobsSlate icons/Icons_mobile.png';
import MailIcon from '../../../assests/jobsSlate icons/Icons_email.png';
import LockIcon from '../../../assests/jobsSlate icons/Icons_password.png';
import { Link } from 'react-router-dom';


const IntialInfo = () => {
  return (
    <div
    className="BKground"
    style={{ backgroundImage: `url(${Bground})`, height: "100vh" }}>
      <div className="main_container_bd">
        <div className="progression_list_bd">
          <div className="wholeBar">
          <div className="fRound" ></div>
          <div className="firstBa"></div>
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
                  <div className="encDivision">
                  <img className="Usign" src={UserIcon} alt="text" style={{ width: 15, height: 15 }}/>
                  <input className='ip_bd' type="text" placeholder="Vicky rakesh roy" style = {{height:30, width:265 }}/>
                  </div>
                </div>
                <div className="fullName_bd">
                  <span className='e_bd'> Mobile</span>
                  <div className="encDivision">
                  <img className="Usign" src={MobIcon} alt="text" style={{ width: 15, height: 15 }}/><span className="dBold">+91</span> |
                  <input className='ip_bd' type="text" placeholder="1234567890" style = {{height:30, width:265 }}/>
                  </div>
                </div>
                <div className="fullName_bd">
                  <span className='e_bd'> Email id</span>
                  <div className="encDivision">
                  <img className="Usign" src={MailIcon} alt="text" style={{ width: 15, height: 15 }}/>
                  <input className='ip_bd' type="text" placeholder="1234@xyz.com" style = {{height:30, width:265 }}/>
                  </div>
                </div>
              </div>
              <div className="changePass_bd">
                <span className='cPass'> Change password</span>
                </div>
                <div className="passCode_bd">
                <div className="fullName_bd">
                  <span className='e_bd'> Current password</span>
                  <div className="encDivision">
                  <img className="Usign" src={LockIcon} alt="text" style={{ width: 15, height: 15 }}/>
                  <input className='ip_bd' type="text" placeholder="**************" style = {{height:30, width:265 }}/>
                  </div>
                </div>
                <div className="fullName_bd">
                  <span className='e_bd'> New name</span>
                  <div className="encDivision">
                  <img className="Usign" src={LockIcon} alt="text" style={{ width: 15, height: 15 }}/>
                  <input className='ip_bd' type="text" placeholder="**************" style = {{height:30, width:265 }}/>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="saveNcancel_bd">
              <div className="save_btn_bd">
                <Link to="/emp_info" className='Save_BD' style={{ textDecoration: 'none' }}><span className='sv_bd'>Save</span></Link>
              </div>
              <div className="cancel_btn_bd">
                <button className='Cancel_BD'><span className='svv_bd'>Cancel</span></button>
              </div>
            </div>
          </div>
          </div>  
          </div>
    </div>
    
  
  )
}

export default IntialInfo