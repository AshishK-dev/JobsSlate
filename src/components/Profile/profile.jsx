import React from 'react';
import './profile.css';
import ProfilePicture from '../../assests/iconsnvectors/dummy.png';
import Bground from "../../assests/iconsnvectors/BGround.svg";
import Portfolio from "../../assests/iconsnvectors/profileport.png";
import { Link } from 'react-router-dom';
const Profile = () => {
  return (
    <>
    <div
        className="background_jl"
        style={{ backgroundImage: `url(${Bground})`, height: "100vh" }}
      >
    <div className='top_container_prof'>
     <div className="picName">
        <div className='proPic'>
            <img className='profilePix' src= {ProfilePicture} alt='text' style={{ width: 100, height:100}}/>
        </div>
        <div className="name_prof">
            <div className="firstHeading"><span className='fHead'>Vicky rakesh roy</span></div>
            <div className="secondHeading"><span className='sHead'>UI Designer at NexGen IoT Solutions</span></div>
        </div>
     </div>
      <div className="infoBox_prof">
        <div className="group_prof1">
        <div className="area_prof"><span className='info_prof'>Gurugram,India</span></div>
        <div className="duration_prof"><span className='info_prof'>1 Year,1 Month</span></div>
        <div className="package_prof"><span className='info_prof'>9 lacs 50 thousand</span></div>
        </div>
        <div className="group_prof2">
        <div className="mobNumber_prof"><span className='info_prof'>12345678900</span></div>
        <div className="email_prof"><span className='info_prof'>email@gmail.com</span></div>
        <div className="email-prof"><span className='info_prof'>email@gmail.com</span></div>
        </div>
      </div>
    </div>
    <div className="bottom_container_prof">
        <div className="fields_prof">
          <div className="resume_prof">
            <div className="f_prof"><span className='resume_font'>Resume</span></div>
            <div className="f_prof"><span className='resume_font'>UPDATE</span></div>
          </div>
          <div className="f_prof">Resume headline</div>
          <div className="f_prof">Key skills</div>
          <div className="f_prof">Employment</div>
          <div className="edu_prof">
            <div className="f_prof">Education</div>
            <div className="f_prof"><span className='resume_font'>ADD</span></div> 
          </div>
          <div className="f_prof">IT skills</div>
          <div className="proj_prof">
          <div className="f_prof">Projeects</div>
          <div className="f_prof"><span className='resume_font'>ADD</span></div>
          </div>
          <div className="f_prof">Profile summary</div>
          <div className="f_prof">Accomplisments</div>
          <div className="f_prof">Carrer profile</div>
          <div className="f_prof">Personal details</div>
        </div>
        <div className="dropdownFields_prof">
         <div className="resume_upload">
          <div className="RS_prof">
            <div className="r_prof"><span className='R_prof'>Resume</span></div>
            <div className="rLine_prof"><span className='Resume_line_prof'>Resume is the most important document recruiters look for. Recruiters generally do not look at profiles without resumes.</span></div>
            </div>
             <div className="Resume_up_prof">
              <div className="headLine_prof"><span className='R_2022_prof'>Resume 2022.pdf - Uploaded on Mar 20,2022</span></div>
              <div className="res_digi"><img src={Portfolio} alt="text" style={{ width: 300, height: 400 }}/></div>
              <div className="downdel">
               <div className="downLoad_prof"><span className='Down_Del'>Download</span></div>
               <div className="delete_prof"><span className='Del_down'>Delete</span></div>
              </div>
              <div className="upResume_prof"><button className='Up_res_prof'>UPLOAD RESUME</button></div>
              <div className="supported_prof"><span className='format_prof'>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</span></div>
             </div>
         </div>
        </div>

    </div>
    </div>
    </>
  )
}

export default Profile
