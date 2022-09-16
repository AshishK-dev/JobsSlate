import React from 'react'
import './head_pref.css'
import Bground from "../../../assests/iconsnvectors/BGround.svg";
import { Link } from 'react-router-dom';
const Head_pref = () => {
  return (
    <div className="backGround_hp"
    style={{ backgroundImage: `url(${Bground})`, height: "100vh" }}>
    <div className="main_container_hp">
    <div className="progression_list_hp">
          <div className="wholeBar_hp">
          <div className="fRound" ></div>
          <div className="fBar"></div>
          <div className="fRound" ></div>
          <div className="fBar"></div>
          <div className="fRound " ></div>
          <div className="fBar"></div>
          <div className="fRound " ></div>
          </div>
          </div> 
          <div className="eduDeatils">
            <div className="heading_edu"><h2 className='fHead_edu'>Add headline & preferences</h2>
            <h5><span className='sHead_edu'> Add preferences to get relevant job recommendations & make your profile stronger.</span></h5>        
        </div>
        <div className="educationalBio_ed">
           <div className="detes_ed"> 
            <div className="qualification">
          <div className="rHead_hp"><span className='Rhead'>Resume headline</span>
          </div> 
          <input className='resumeH_hp' type="text" placeholder="UI designer with BA in fine arts currently living in gurgaon" style = {{height:73, width:250}} />
            
            <div className="suggesteion_ed">
             <div className="sug_edu"> <span className='suggest_HP'> Suggestions</span></div>
             <input className='resumeH_hp' type="text" placeholder="UI designer with BA in fine arts currently living in gurgaon" style = {{height:73, width:250}} />
            </div>
            </div>
            <div className="course_ed"><span className='Rhead'>Preferred job type</span>
              <div className="pjt_hp">
                <div className="pre_hp"><button className='pre_btn_hp'> Permanent  x</button></div>
                <div className="pre_hp"><button className='tc_btn_hp'> Temporary/Contract  +</button></div>
                </div>
                 </div>
                 <div className="cour_hp"><span className='Rhead'>Preferred Employment Type</span>
                <div className="pjt_hp">
                <div className="pr_hp"><button className='pre_btn_hp'> Full time  x</button></div>
                <div className="p_hp"><button className='tc_btn_hp'> Part time  +</button></div>
                </div>
                </div>
                <div className="cour_hp"><span className='Rhead'>Preferred work location  </span>
                <div className="pjt_hp">
                <div className="pres_hp"><button className='pre_btn_hp'> Gurgaon/Gurugram x</button></div>
                <div className="pM_hp"><button className='tc_btn_hp'> Mumbai</button></div>
                </div>
                </div>
            <div className="course_ed">
                         
            </div>
            <div className="course_ed">
                         
            </div>
            <div className="course_ed">
            
            <div className="suggestion_hp"><span className='suggest_HP'> Suggestions</span>
            <div className="option_container">
            <button className='S_quali_ed'> Option1 +</button>
            <button className='S_quali_ed'> Option2 +</button>
            <button className='S_quali_ed'> Option3 +</button>
            </div>
            <div className="option_container">
            <button className='S_quali_ed'> Option1 +</button>
            <button className='S_quali_ed'> Option2 +</button>
            <button className='S_quali_ed'> Option3 +</button>
            </div>
            <div className="option_container">
            <button className='S_quali_ed'> Option1 +</button>
            <button className='S_quali_ed'> Option2 +</button>
            <button className='S_quali_ed'> Option3 +</button>
            </div>
            </div>             
            </div>
            </div>
            </div>
            <div className="submit_continue_hp">
            <Link to="/profile" className='quali_HP' style={{ textDecoration: 'none' }}> Save and continue</Link>
            </div>
            </div>
          
    </div>
    
          </div>
       )
}

export default Head_pref