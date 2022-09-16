import React from 'react';
import './profile.css';
import ProfilePicture from '../../assests/jobsSlate icons/Icons_user_profile.png';
import Bground from "../../assests/iconsnvectors/BGround.svg";
import Portfolio from "../../assests/iconsnvectors/profileport.png";
import Gtick from "../../assests/jobsSlate icons/Icons_check_mark.png";
import Peeps from "../../assests/jobsSlate icons/Icons_user.png";
import Mobile from "../../assests/jobsSlate icons/Icons_mobile.png";
import Emailid from "../../assests/jobsSlate icons/Icons_email.png";
import Edith from "../../assests/jobsSlate icons/Icons_edit.png";
import EditB from "../../assests/jobsSlate icons/Icons_edit_pic.png";
import Wmark from "../../assests/jobsSlate icons/Icons_close_red.png";
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
            <img className='editOption'  src={EditB} alt='text' style={{width:20, height:20}}/>
        </div>
        <div className="name_prof">
            <div className="firstHeading"><span className='fHead'>Vicky rakesh roy</span></div>
            <div className="secondHeading"><span className='sHead'>UI Designer at NexGen IoT Solutions</span></div>
        </div>
     </div>
      <div className="infoBox_prof">
        <div className="group_prof1">
        <div className="area_prof"><span className='info_prof'><img src= {Peeps} alt='text' style={{ width: 12, height:12}}/> Gurugram,India</span></div>
        <div className="duration_prof"><span className='info_prof'><img src= {Peeps} alt='text' style={{ width: 12, height:12}}/> 1 Year,1 Month</span></div>
        <div className="package_prof"><span className='info_prof'><img src= {Peeps} alt='text' style={{ width: 12, height:12}}/> 9 lacs 50 thousand</span></div>
        </div>
        <div className="group_prof2">
        <div className="mobNumber_prof"><span className='info_prof'> <img src= {Mobile} alt='text' style={{ width: 12, height:12}}/> 12345678900</span></div>
        <div className="email_prof"><span className='info_prof'> <img src= {Emailid} alt='text' style={{ width: 10, height:10}}/> email@gmail.com</span></div>
        <div className="email-prof"><span className='info_prof'> <img src= {Emailid} alt='text' style={{ width: 10, height:10}}/> email@gmail.com</span></div>
        </div>
      </div>
    </div>
    <div className="bottom_container_prof">
        <div className="fields_prof">
          <div className="mProf">
          <div className="Resume_prof">
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
        </div>
         <div className="dropdownFields_prof"> 
         <div className="resume_upload">
          <div className="down_prof">
          <div className="RS_prof">
            <div className="r_prof"><span className='R_prof'>Resume</span></div>
            <div className="rLine_prof"><span className='Resume_line_prof'>Resume is the most important document recruiters look for. Recruiters generally do not look at profiles without resumes.</span></div>
            </div>
             <div className="Resume_up_prof">
              <div className="headLine_prof"><span className='R_2022_prof'>Resume 2022.pdf - <span className='ud_prof'> Uploaded on Mar 20,2022</span></span></div>
              <div className="res_digi"><img src={Portfolio} alt="text" style={{ width: 300, height: 400 }}/></div>
              <div className="downdel">
               <div className="downLoad_prof"><span className='Down_Del'>DOWNLOAD</span></div>
               <div className="delete_prof"><span className='Del_down'>DELETE</span></div>
              </div>
              <div className="upResume_prof"><button className='Up_res_prof'><span className='upd_prof'> Upload resume</span></button></div>
              <div className="supported_prof"><span className='format_prof'>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</span></div>
             </div>
             </div>
         </div>
         <div className="r_prof_head">
          <div className="portf_head">
           <h3 className='rHead_profile'> Resume headline <img src= {Edith} alt='text' style={{ width: 14, height:14}}/></h3>
          </div>
          <div className="deg_prof">
            <span className='deg_dets'>UI Designer with B.A in Fine Arts currently Living in Gurgaon/ Gurugram</span>
          </div>
         </div>
         <div className="k_skill_prof">
          <span className='key_prof'><h3 className='k_skl_prof'>Key skills <img src= {Edith} alt='text' style={{ width: 14, height:14}}/></h3></span>
          <div className="skillName">
            <button className='ui_prof'><span className='sFont_prof'> User interface design </span> </button>
            <button className='f_ui_prof'><span className='sFont_prof'> User experience design </span></button>
            <button className='s_ui_prof'><span className='sFont_prof'> Visual design </span></button>
            <button className='t_ui_prof'><span className='sFont_prof'> Branding </span></button>
          
          </div>
         </div>
         <div className="mEmp_prof">
          <div className="employ_prof">
            <div className="em_prof"><h3 className='demp_prof'>Employment</h3></div>
            <div className="Aemp_prof"> <span className='aDD_emp'>ADD EMPLOYMENT</span></div>
          </div>
          <div className="ui_descrip">
          <div className="des_prof"><span className='de_prof'>Sr UI UX designer</span> <img src= {Edith} alt='text' style={{ width: 14, height:14}}/></div>
          <div className="desprof_prof"><span className='dd_prof'>NexG IoT Solutions Nov 2021 to Present (9 months) 15 Days Notice Period UI UX Designer, Branding, Graphic Designer. Top 5 Key Skills:UI UX Designer</span></div>
          </div>
          <div className="uis_descrip">
          <div className="des_prof"><span className='de_prof'> UI UX designer</span> <img src= {Edith} alt='text' style={{ width: 14, height:14}}/></div>
          <div className="desprof_prof"><span className='dd_prof'>QuicSolv Technologies Pvt. Ltd. Nov 2021 to Present (4 Year 5 months) 15 Days Notice Period UI UX Designer, Branding, Graphic Designer. Top 5 Key Skills:UI UX Designer</span></div>
          </div>  
         </div>
         <div className="mE_mp_prof">
          <div className="employ_prof">
            <div className="em_prof"><h3 className='demp_prof'>Education</h3></div>
            <div className="Aemp_prof"> <span className='aDD_emp'>ADD EDUCATION</span></div>
          </div>
          <div className="ui_descrip">
          <div className="des_prof"><span className='de_prof'>B.Sc-Graphics and Animation</span> <img src= {Edith} alt='text' style={{ width: 14, height:14}}/></div>
          <div className="despr_of_prof"><span className='dd_prof'>William Carey University 2020 (Full Time)</span></div>
          </div>
          <div className="masProfile">
          <div className="masters_prof"><span className='educa_prof'>Add Masters/ Post-Graduation</span></div>
          <div className="masters_prof"><span className='educa_prof'>Add 12th</span></div>
            <div className="masters_prof"><span className='educa_prof'>Add 10th</span></div></div>
            
          </div>
            <div className="it_prof">
              <div className="its_prof">
              <div className="itSkills"><h3 className='infoTech'>IT Skills</h3></div>
            <div className="aDetails_prof"><span className='aDD_emp'>ADD DETAILS</span></div>
          </div>
          <div className="fields_up_prof">
         <table className='tab_prof'>
          <tr className='forceField'>
            <th className='fField'>Skills</th>
            <th className='fField'>Version</th>
            <th className='fField'> Last used</th>
            <th className='fField'>Experience</th>
          </tr>
            <tr className='forceField'>
              <td className='cField'> Sigma</td>
              <td className='cField'> - -</td>
              <td className='cField'> 2022</td>
              <td className='cField'> 3 Years 0 Months  <img src= {Edith} alt='text' style={{ width: 14, height:14}}/></td>
            </tr>
            <tr className='forceField'>
              <td className='cField'> Zeplin</td>
              <td className='cField'> 1.0</td>
              <td className='cField'> 2022</td>
              <td className='cField'> 5 Years 0 Months  <img src= {Edith} alt='text' style={{ width: 14, height:14}}/></td>
            </tr>
            <tr className='forceField'>
              <td className='cField'> Adobe XD </td>
              <td className='cField'> CC</td>
              <td className='cField'> 2022</td>
              <td className='cField'> 5 Years 0 Months  <img src= {Edith} alt='text' style={{ width: 14, height:14}}/></td>
            </tr>
            <tr className='forceField'>
              <td className='cField'> Adobe Illustration</td>
              <td className='cField'> CC</td>
              <td className='cField'> 2022</td>
              <td className='cField'> 11 Years 0 Months  <img src= {Edith} alt='text' style={{ width: 14, height:14}}/></td>
            </tr>
            <tr className='forceField'>
              <td className='cField'> Adobe photoshop</td>
              <td className='cField'> CC</td>
              <td className='cField'> 2022</td>
              <td className='cField'> 11 Years 0 Months  <img src= {Edith} alt='text' style={{ width: 14, height:14}}/></td>
            </tr>
          </table>              
          </div>
          <div className="c_prof_head">
          <div className="portf_head">
           <div className="head_h1_prof"><h3 className='proj_Prof'> Projects</h3></div>
           <div className="adProj_prof"><span className='pjj_prof'> ADD PROJECT</span></div>
          </div>

          <div className="deg_prof">
            <span className='deg_dets'>Add details about projects you have done in college, internship or at work.</span>
          </div>
         </div>
         <div className="proj_prof_head">
          <div className="portf_head">
           <div className="head_h1_prof"><h3 className='proj_Prof'> Profile summary  <img src= {Edith} alt='text' style={{ width: 14, height:14}}/></h3></div>
          </div>

          <div className="deg_prof">
            <span className='deg_dets'>Hello, I am a passionate designer with 13 years of experience in the Multimedia Industry <br/> for Clients from the UK, US and Canada. I think my experience in design would make me a <br/> great addition to your team. For the past 12 years, I have worked on multi-domains <br/>including: UI/UX De… <span className='read_drop'> Read More</span> </span>
          </div>
         </div>
         <div className="accomp_prof">
          <div className="acc_profile">
          <div className="acc_head"><h3 className='proj_Prof'> Accomplishments</h3></div>
          <div className="on_prof">
            <div className="op_prof">
              <div className="opAdd">Online profile</div>
              <div className="opAdd_prof"><span className='aDD_emp_prof'>ADD</span></div>
            </div>
            <div className="addLink">Add link to Online profiles (e.g. Linkedin, Facebook etc.).</div>
          </div>
          <div className="line_profile"></div>
          <div className="on_prof">
            <div className="op_prof">
              <div className="opAdd">Online profile</div>
              <div className="opAdd_prof"><span className='aDD_emp_prof'>ADD</span></div>
            </div>
            <div className="addLink">Add link to Online profiles (e.g. Linkedin, Facebook etc.).</div>
          </div>
          <div className="line_profile"></div>
          <div className="on_prof">
            <div className="op_prof">
              <div className="opAdd">Online profile</div>
              <div className="opAdd_prof"><span className='aDD_emp_prof'>ADD</span></div>
            </div>
            <div className="addLink">Add link to Online profiles (e.g. Linkedin, Facebook etc.).</div>
          </div>
          <div className="line_profile"></div>
          <div className="on_prof">
            <div className="op_prof">
              <div className="opAdd">Online profile</div>
              <div className="opAdd_prof"><span className='aDD_emp_prof'>ADD</span></div>
            </div>
            <div className="addLink">Add link to Online profiles (e.g. Linkedin, Facebook etc.).</div>
          </div>
          <div className="line_profile"></div>
          <div className="on_prof">
            <div className="op_prof">
              <div className="opAdd">Online profile</div>
              <div className="opAdd_prof"><span className='aDD_emp_prof'>ADD</span></div>
            </div>
            <div className="addLink">Add link to Online profiles (e.g. Linkedin, Facebook etc.).</div>
          </div>
          <div className="line_profile"></div>
          <div className="on_prof">
            <div className="op_prof">
              <div className="opAdd">Online profile</div>
              <div className="opAdd_prof"><span className='aDD_emp_prof'>ADD</span></div>
            </div>
            <div className="addLink">Add link to Online profiles (e.g. Linkedin, Facebook etc.).</div>
          </div>
          <div className="line_profile"></div>
          <div className="dip_prof">
            <div className="atd">Art teacher diploma  <img src= {Edith} alt='text' style={{ width: 14, height:14}}/></div>
            <div className="typeProfile"><span className='textProfile'>Private  </span></div>
            <div className="typeProfile_duration"><span className='textProfile'>2006(Full time)</span></div>
          </div>
          <div className="dip_prof">
            <div className="atd">UI UX Design  <img src= {Edith} alt='text' style={{ width: 14, height:14}}/></div>
            <div className="typeProfile"><span className='textProfile'>Private</span></div>
            <div className="typeProfile_duration"><span className='textProfile'>2006(Full time)</span></div>
          </div>
          </div>
         </div>
         <div className="cpProfile">
          <div className="cpProf_marg">
          <div className="cpHead"><h3 className='proj_Prof'> Carreer profile  <img src= {Edith} alt='text' style={{ width: 14, height:14}}/></h3></div>
          <div className="cpInfo">
            <div className="cid_prof">
              <div className="ciInfo"><span className='currIn'>Current industry</span></div>
              <div className="ciSpecific">Design</div>
            </div>
            <div className="i_prof1">
              <div className="cInfo1"><span className='currIn'>Department</span></div>
              <div className="c1Specific">UX, Design & Architecture<span className='slash'>_____</span></div>
            </div>
          </div>
          <div className="cpInfo">
            <div className="cid_prof">
              <div className="ciInfo  "><span className='currIn'>Role category</span></div>
              <div className= "ciSpecific">UI / UX</div>
            </div>
            <div className="id_prof">
              <div className="cInfo2"><span className='currIn'>Job role</span></div>
              <div className="ciSpecific">Design <span className='slash'>___________________</span> </div>
            </div>
          </div>
          <div className="cpInfo">
            <div className="cid_prof">
              <div className="ciInfo"><span className='currIn'>Desired job type</span></div>
              <div className="ciSpecific">Contractual, Permanent</div>
            </div>
            <div className="id_prof">
              <div className="ciInfo"><span className='currIn'>Desired Employment Type</span></div>
              <div className="ciSpecific">Full time<span className='slash'>__________________</span></div>
            </div>
          </div>
          <div className="cpInfo">
            <div className="cid_prof">
              <div className="ciInfo"><span className='currIn'>Preferred shift</span></div>
              <div className="ciSpecific">Flexible</div>
            </div>
            <div className="id_prof">
              <div className="ciInfo"><span className='currIn'>Preferred work location</span></div>
              <div className="ciSpecific">Pune, Hyderabad/Secunderabad,<br/> Bangalore/Bengaluru, Mumbai,<br/> Gurgaon/Gurugram, Noida,<br/> Delhi / NCR, Remote</div>
            </div>
            
          </div>
          <div className="eSalary"><span className='currIn'>Expected salary</span></div>
          <div className="esalaryProf">12 Lacs</div>
          </div>
          </div>
          <div className="pdProf">
            <div className="perDetails_prof">
              <div className="pdHead_prof"><h2>Personal details  <img src= {Edith} alt='text' style={{ width: 14, height:14}}/></h2></div>
              <div className="cpInfo">
            <div className="cid_prof">
              <div className="ciInfo"><span className='currIn'>Personal</span></div>
              <div className="ciSpecific">Male, Straight, Married</div>
            </div>
            <div className="id_prof">
              <div className="ciInfo"><span className='currIn'>Carrer break</span></div>
              <div className="ciSpecific"><span className='addBreak_prof'>Add carrer break</span><span className='slash'>_______________-</span></div>
            </div>
          </div>
          <div className="cpInfo">
            <div className="cid_prof">
              <div className="ciInfo"><span className='currIn'>Date of birth</span></div>
              <div className="ciSpecific">31 oct 1985</div>
            </div>
            <div className="id_prof">
              <div className="ciInfo"><span className='currIn'>Work permit</span></div>
              <div className="ciSpecific">India<span className='slash'>_______________________-</span></div>
            </div>
          </div>
          <div className="cpInfo">
            <div className="cid_prof">
              <div className="ciInfo"><span className='currIn'>Category</span></div>
              <div className="ciSpecific">General</div>
            </div>
            <div className="id_prof">
              <div className="ciInfo"><span className='currIn'>Address</span></div>
              <div className="ciSpecific">302, Sah Varma Building, Kate Vasti, <br/> Nr. Konkan Maratha Sabhagruh, Dighi,<br/> Pune, 411015</div>
            </div>
          </div>
           <div className="phy_prof"><span className='currIn'>Department</span></div>
           <div className="phyProf">No</div>  
           <div className="tabLP">
            <table className="lpEntries">
              <tr className='rowProf'>
                <th className='langPro'>Languages</th>
                <th className='langPro'>Proficiency</th>
                <th className='langPro'>Read</th>
                <th className='langPro'>Write</th>
                <th className='langPro'>Speak</th>
              </tr>
              <tr className='rowProfile'>
                <td className='langProf'>English</td>
                <td className='langProf'>Proficienct</td>
                <td className='langProf'><img className='trueProf' src={Gtick} alt='text' style={{width:18,height:18}} /></td>
                <td className='langProf'><img className='trueProf' src={Gtick} alt='text' style={{width:18,height:18}} /></td>
                <td className='langProf'><img className='trueProf' src={Gtick} alt='text' style={{width:18,height:18}} /></td>
              </tr>
              <tr className='rowProfile'>
                <td className='langProf'>Hindi</td>
                <td className='langProf'>Expert</td>
                <td className='langProf'><img className='trueProf' src={Gtick} alt='text' style={{width:18,height:18}} /></td>
                <td className='langProf'><img className='trueProf' src={Gtick} alt='text' style={{width:18,height:18}} /></td>
                <td className='langProf'><img className='trueProf' src={Gtick} alt='text' style={{width:18,height:18}} /></td>
              </tr>
              <tr className='rowProfile'>
                <td className='langProf'>Marathi</td>
                <td className='langProf'>Expert</td>
                <td className='langProf'><img className='trueProf' src={Gtick} alt='text' style={{width:18,height:18}} /></td>
                <td className='langProf'><img className='trueProf' src={Gtick} alt='text' style={{width:18,height:18}} /></td>
                <td className='langProf'><img className='trueProf' src={Gtick} alt='text' style={{width:18,height:18}} /></td>
              </tr>
              <tr className='rowProfile'>
                <td className='langProf'>French</td>
                <td className='langProf'>Beginner</td>
                <td className='langProf'><img className='trueProf' src={Gtick} alt='text' style={{width:18,height:18}} /></td>
                <td className='langProf'><img className='trueProf' src={Gtick} alt='text' style={{width:18,height:18}} /></td>
                <td className='langProf'><img className='trueProf' src={Wmark} alt='text' style={{width:18,height:18}} /></td>
              </tr>
              
            </table>
           </div>
          </div>

          </div>

         </div>
        </div>
 
    </div>
    </div>
    </>
  )
}

export default Profile
