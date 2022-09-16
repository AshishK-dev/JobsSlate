import React from 'react'
import "./employment.css"
import Bground from "../../../assests/iconsnvectors/BGround.svg";
import { Link } from 'react-router-dom';

const Emp_info = () => {
  return (
    <div lassName="BKground"
    style={{ backgroundImage: `url(${Bground})`, height: "100vh" }}>
        <div className="main_container_ei">
        <div className="progression_list_ei">
          <div className="wholeBar_ei">
          <div className="fRound" ></div>
          <div className="fBar"></div>
          <div className="fRound" ></div>
          <div className="firstBar"></div>
          <div className="firstRound " ></div>
          <div className="firstBar"></div>
          <div className="firstRound " ></div>
          </div>
          </div> 
          <div className="container_emp">
            <div className="ml_container_emp">
       <div className="empHead">
        <h2 className="firstHeading">Add your employment</h2>
        <h5 className="secondHeading">Employment details help recruiters understand your background</h5> 
       </div>
       <div className="currentEmp">Are you currently employed?
        <div className="decesion">
            <button className="decesionOption_Y">Yes</button>
            <button className="decesionOption_N">No</button>
        </div>
    </div>
        <div className="empDuration">Duration of employment
            <div className="empDuration_time">
                <div className="empDuration_years"> <input className="entryBox" type="text" placeholder="1 year"/></div>
                <div className="empDuration_months"> <input className="entryBox" type="text" placeholder="1 month"/></div>
            </div>
            </div>
            <div className="empCompany">Company
                <div className="emp_entryBox"><input className="c_entryBox" type="text" placeholder="NexGen iot solutions"/></div>
            </div>
            <div className="empJobTitle">Job title
                <div className="emp_entryBox"><input className="c_entryBox" type="text" placeholder="UI/UX designer"/></div>
            </div>
            <div className="empCurrentCity">Current city
                <div className="emp_entryBox"><input className="c_entryBox" type="text" placeholder="" /></div>
            </div>
            <div className="empDuration">Working since
                <div className="empDuration_time">
                    <div className="empDuration_ws"> <input className="entryBox" type="text" placeholder="11/2021"/> To</div>
                    <div className="empDuration_wsT"> <input className="entryBox_ws" type="text" placeholder="Present"/></div>
                </div>
            </div>
                <div className="empSalary">Annual salary
                    <div className="empAnnualSalary">
                        <div className="empDuration_years"> <input className="entryBox_as" type="text" placeholder="₹"/></div>
                        <div className="empDuration_months"> <input className="entryBox_asNumber" type="text" placeholder="9,00,000"/></div>
                    </div>
                    </div>
                    <div className="currentJoining">Availability to join
                        <div className="joiningDuration">    
                        <button className="joinDate">15 days or less <span className="cross">X</span></button>
                    </div>
                </div>    
                        <div className="suggest_emp">Suggestions:
                                <div className="suggest_emp1">
                                    <button className="openSuggestions">option 1  +</button>
                                    <button className="openSuggestions">option 1  +</button>
                                    <button className="openSuggestions">option 1  +</button>
                                </div>
                            </div>    
                    
                    <div className="empCurrentCity">Current city
                        <div className="emp_entryBox"><input className="c_entryBox" type="text" placeholder="" /></div>
                    </div>
                    <div className="suggest_emp">Suggestions:
                        <div className="suggest_emp1">
                            <button className="openSuggestions">option 1  +</button>
                            <button className="openSuggestions">option 1  +</button>
                            <button className="openSuggestions">option 1  +</button>
                        </div>
                    </div>    
                    <div className="empDepartment">Department
                        <div className="emp_entryBox"><input className="c_entryBox" type="text" placeholder="Select" /></div>
                    </div>
                    <div className="suggest_emp">Suggestions:
                        <div className="suggest_emp1">
                            <button className="openSuggestions">option 1  +</button>
                            <button className="openSuggestions">option 1  +</button>
                            <button className="openSuggestions">option 1  +</button>
                        </div>
                    </div>    
                    <div className="empCurrentCity">Role category
                        <div className="emp_entryBox"><input className="c_entryBox" type="text" placeholder="" /></div>
                    </div>
                    <div className="suggest_emp">Suggestions:
                        <div className="suggest_emp1">
                            <button className="openSuggestions">option 1  +</button>
                            <button className="openSuggestions">option 1  +</button>
                            <button className="openSuggestions">option 1  +</button>
                        </div>
                    </div>    
                    <div className="empCurrentCity">Job role
                        <div className="emp_entryBox"><input className="c_entryBox" type="text" placeholder="" /></div>
                    </div>
                    <div className="suggest_emp">Suggestions:
                        <div className="suggest_emp1">
                            <button className="openSuggestions">option 1  +</button>
                            <button className="openSuggestions">option 1  +</button>
                            <button className="openSuggestions">option 1  +</button>
                        </div>
                    </div>    
            <div className="keySkills">Key skills
                <div className="emp_entryBox"><input className="K_entryBox" type="text" placeholder="Select" /></div>
            </div>
            <div className="suggest_emp">Suggestions:
                <div className="suggest_emp1">
                    <button className="openSuggestions">option 1  +</button>
                    <button className="openSuggestions">option 1  +</button>
                    <button className="openSuggestions">option 1  +</button>
                </div>
                <div className="suggest_emp1">
                    <button className="openSuggestions">option 1  +</button>
                    <button className="openSuggestions">option 1  +</button>
                    <button className="openSuggestions">option 1  +</button>
                </div>
                <div className="suggest_emp1">
                    <button className="openSuggestions">option 1  +</button>
                    <button className="openSuggestions">option 1  +</button>
                    <button className="openSuggestions">option 1  +</button>
                </div>
            </div>
            <div className="SnA">
                <div className="SnA_btn">
                    <Link to="/EduInfo" className="saveNcontuniue" style={{ textDecoration: 'none' }}>Save and continue</Link>
                </div>
            </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Emp_info

