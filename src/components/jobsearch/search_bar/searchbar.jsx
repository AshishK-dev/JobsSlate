import React from 'react'
import Landingpage from '../../../assests/iconsnvectors/landingpage.png'
import "./searchbar.css"
import Bground from "../../../assests/iconsnvectors/BGround.svg"
import Magnifier from '../../../assests/iconsnvectors/search@72x.png'
import Location_emoji from '../../../assests/iconsnvectors/locationsymbol.png'
import Time_piece from '../../../assests/iconsnvectors/time@72x.png'
import NexGen from "../../../assests/iconsnvectors/nexgeniot.jpg"
import { useNavigate } from 'react-router-dom'
const Searchbar = () => {
 const navigate = useNavigate()
function handelSearch()
{
navigate("/job-suggestion")
}
  return (
    <div classNameName="BKground"
    style={{ backgroundImage: `url(${Bground})`, height: "100vh" }}>
    
      <div className="main_con">
        <div className="firstHalf">
            <div className="logoImage">
            <img src = {Landingpage} alt = 'text'  style={{ width: 350, height: 280 }}/>
            </div>
            <div className="head_text_js">
                <h1>Search between <br />more than<span className='specific_js'> 13.8 million<br /></span>
                    open <span className='specific_js'>jobs. </span></h1>
            </div>
        </div>
        <div className="search-box-container_js">
            <div className="search-box_js">
                <div className="sBar">
                <div className="magnify"> <img src = {Magnifier} alt= "text" style={{ width: 20, height:20}}/></div>
                <div className="job_profile"> <input type="text" placeholder=' Enter job title' style={{border:"none"}} />
                </div>
                <div className="job_loc12"> <img src = { Location_emoji } alt= "text"  style={{ width: 20, height:20}}/></div>
                <div className='job_area'> <input type="text" placeholder=' Enter your location' style={{border:"none"}}  />
                </div>
            </div>
            <div className="job_search"> <button onClick={handelSearch} className='search_btn_js'>Search</button></div>
            </div>
        </div>
        <div className="second_half_js">
            <div className="second_heading">
                <h2>Latest jobs</h2>
            </div>
            <div className="comps">
                <div className="suggestions_js">
                    <h3 className="js" >Java developer with AWS cloud</h3>
                    <div className="kompany">
                        <div className="company_ng"><img src = { Location_emoji } alt= "text" style={{ width: 13, height:13}}/>NexGen Iot Solutions,LLC</div>
                        <div className="kompany_loc"><img src = { Location_emoji } alt= "text" style={{ width: 13, height:13}}/>Jersy city,NJ,USA</div>
                    </div>
                    <div className="job_details"><button className='details_btn_js'>View details</button></div>
                    <div className="jobContent">
                    <div className="nameConv">
                    <div className="jobType">Job type:<span className="fontTime">Full time</span></div>
                    <div className="jobClock"><img src = { Time_piece } alt= "text" style={{ width: 13, height:13}}/><span className="fontTime">3 hours ago</span>
                    </div>
                    </div>
                    <div className="wClient">W2 Position with our client. Open for H1B transfer candidates andcandidates (except CPT) on all the roles provided they have at least 2 years visa validity.
                         Submit your cv’s to Required Skills: 4-6 years of relevant</div>
                    </div>
                    
                    
                    <div className="company_logo_js"><img src = { NexGen } alt= "text" style={{ width: 100, height:100}}/></div>
                    <div className="line_js"></div>
                </div>
                <div className="suggestions_js">
                    <h3 className="js" >Java developer with AWS cloud</h3>
                    <div className="kompany">
                        <div className="company_ng"><img src = { Location_emoji } alt= "text" style={{ width: 13, height:13}}/>NexGen Iot Solutions,LLC</div>
                        <div className="kompany_loc"><img src = { Location_emoji } alt= "text" style={{ width: 13, height:13}}/>Jersy city,NJ,USA</div>
                    </div>
                    <div className="job_details"><button className='details_btn_js'>View details</button></div>
                    <div className="jobContent">
                    <div className="nameConv">
                    <div className="jobType">Job type:<span className="fontTime">Full time</span></div>
                    <div className="jobClock"><img src = { Time_piece }  alt= "text" style={{ width: 13, height:13}}/><span className="fontTime">3 hours ago</span>
                    </div>
                    </div>
                    <div className="wClient">W2 Position with our client. Open for H1B transfer candidates andcandidates (except CPT) on all the roles provided they have at least 2 years visa validity.
                         Submit your cv’s to Required Skills: 4-6 years of relevant</div>
                    </div>
                    
                    
                    <div className="company_logo_js"><img src = { NexGen } alt= "text" style={{ width: 100, height:100}}/></div>
                    <div className="line_js"></div>
                </div>
                
            </div>
        </div>
        </div>
      
    
    
    </div>
  );
};

export default Searchbar;