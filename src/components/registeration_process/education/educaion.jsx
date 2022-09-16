import React, {useState} from 'react'
import './education.css'
import Bground from "../../../assests/iconsnvectors/BGround.svg";
import { Link } from 'react-router-dom';


const EduInfo = () => {
  return (
    <div className="backGround_ed"
    style={{ backgroundImage: `url(${Bground})`, height: "100vh" }}>
   <div className="main_container_ei">
        <div className="progression_list_ei">
          <div className="wholeBar_ei">
          <div className="fRound" ></div>
          <div className="fBar"></div>
          <div className="fRound" ></div>
          <div className="fBar"></div>
          <div className="fRound " ></div>
          <div className="firstBar"></div>
          <div className="firstRound " ></div>
          </div>
          </div> 
          <div className="eduDeatils">
            <div className="heading_edu"><h2 className='fHead_edu'>Mention your education</h2>
            <h5><span className='sHead_edu'> Adding your educational details will help recuiters to know your value as a potential candidate.</span></h5>        
        </div>
        <div className="educationalBio_ed">
           <div className="detes_ed"> 
            <div className="qualification">
            <label htmlFor="highest_qualification">
            Highest qualification </label>
            <button className='quality_ed'> Graduation/Diploma </button>
            <div className="suggesteion_ed">
             <div className="sug_edu"> <span className='suggest_edu'> Suggestions</span></div>
            <div className="option_container">
            <button className='S_quali_ed'> Option1  +</button>
            <button className='S_quali_ed'> Option2  +</button>
            <button className='S_quali_ed'> Option3  +</button>
            </div>
            </div>
            </div>
            <div className="course_ed">Course
            <input className='course_box' type='text' placeholder='' style = {{height:25, width:260}}/>             
            </div>
            <div className="course_ed">Specialisation
            <input className='course_box' type='text' placeholder='' style = {{height:25, width:260}}/>             
            </div>
            <div className="course_ed">University/Institute
            <input className='course_box' type='text' placeholder='' style = {{height:25, width:260}}/>             
            </div>
            <div className="course_ed">Course type
            <input className='course_box' type='text' placeholder='' style = {{height:25  , width:260}}/>
            <div className="suggestion_ed"><span className='suggest_edu'> Suggestions</span>
            <div className="option_container">
            <button className='S_quali_ed'> Option1 +</button>
            <button className='S_quali_ed'> Option2 +</button>
            <button className='S_quali_ed'> Option3 +</button>
            </div>
            </div>             
            </div>
            <div className="passing_year">Passing year
            <input className='PassingYear' type = 'text' placeholder = '2022' style = {{height:25, width:260}}/>
            </div>
            </div>
            </div>
            <div className="submit_continue">
            <Link to="/head" className='quality_ed' style={{ textDecoration: 'none' }}><span className='svan_ed'>Save and continue </span></Link>
            </div>
            </div>
            </div>
            </div>
  )
}

export default EduInfo
