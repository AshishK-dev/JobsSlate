import React from "react";
import "./joblists.css";
import Magnifier from "../../assests/iconsnvectors/search@72x.png";
import Location_emoji from "../../assests/iconsnvectors/locationsymbol.png";
import Bground from "../../assests/iconsnvectors/BGround.svg";
import NexGen from "../../assests/iconsnvectors/nexgeniot.jpg";
import Time_piece from '../../assests/iconsnvectors/time@72x.png';
import AlBell from "../../assests/jobsSlate icons/Icons_alert.png";
import Arrow from "../../assests/jobsSlate icons/Icons_drop_down.png"
import {Link} from 'react-router-dom'

const Job_suggestions = () => {
  return (
    <>
      <div
        className="background_jl"
        style={{ backgroundImage: `url(${Bground})`, height: "100vh" }}
      >
        
        <div className="search-box-container_jl">
            <div className="search-box_jl">
                <div className="Bar_jl">
                <div className="magnify_jl"> <img src = {Magnifier} alt= "text" style={{ width: 20, height:20}}/></div>
                <div className="job_profile_jl"> <input type="text" placeholder=' Enter job title' style={{border:"none"}} />
                </div>
                <div className="job_loc12_jl"> <img src = { Location_emoji } alt= "text"  style={{ width: 20, height:20}}/></div>
                <div className='job_area_jl'> <input type="text" placeholder=' Enter your location' style={{border:"none"}}  />
                </div>
            </div>
            <div className="job_search_jl"> <button className='search_btn_js'>Search</button></div>
            </div>
            <div className="custom_alert_jl"> <button className='cs_alert_btn_jl'><img src = {AlBell} alt="text" style={{ width: 20, height:20,}} />  Custom job alerts</button></div>

        </div>
        
        <div className="secondary_container">
        <div className="mtOP">
          <div className="all_filters"><span className="f_jl"> All filters</span>
          <div className="filter_container">
            <div className="fill_jl">
            <div className="loc_filter">
              <div className="locate_jl">Location</div>
              <div className="loc_bttn"><button className="locDrop"><img src = {Arrow} alt="text" style={{ width: 20, height:20,}} /></button></div>
              </div>
              <div className="locnames">
                <div className="optName">
                <div className="locPune">
                <div className="pune_jl" >
                <input type="checkbox" id="location1`" name="position1" value="city"/>
                <label for="location1`"> Pune</label>
                </div>
                  <div className="number_pune">276 </div>
                </div>
                <div className="locPune">
                <div className="pune_jl" >
                <input type="checkbox" id="location1`" name="position1" value="city"/>
                <label for="location1`"> Pune</label>
                </div>
                  <div className="number_pune">276 </div>
                </div>
                <div className="locPune">
                <div className="pune_jl" >
                <input type="checkbox" id="location1`" name="position1" value="city"/>
                <label for="location1`"> Pune</label>
                </div>
                  <div className="number_pune">276 </div>
                </div>
                <div className="locPune">
                <div className="pune_jl" >
                <input type="checkbox" id="location1`" name="position1" value="city"/>
                <label for="location1`"> Pune</label>
                </div>
                  <div className="number_pune">276 </div>
                </div>
                <div className="locPune">
                <div className="pune_jl" >
                <input type="checkbox" id="location1`" name="position1" value="city"/>
                <label for="location1`"> Pune</label>
                </div>
                  <div className="number_pune">276 </div>
                </div>
                <div className="locPune">
                <div className="pune_jl" >
                <input type="checkbox" id="location1`" name="position1" value="city"/>
                <label for="location1`"> Pune</label>
                </div>
                  <div className="number_pune">276 </div>
                </div>
                <div className="locPune">
                <div className="pune_jl" >
                <input type="checkbox" id="location1`" name="position1" value="city"/>
                <label for="location1`"> Pune</label>
                </div>
                  <div className="number_pune">276 </div>
                </div>
                <div className="locPune">
                <div className="pune_jl" >
                <input type="checkbox" id="location1`" name="position1" value="city"/>
                <label for="location1`"> Pune</label>
                </div>
                  <div className="number_pune">276 </div>
                </div>
                <div className="more_suggestions"><span className="more_cities"> +25 more locations </span> </div>
                <div className="partition_line"></div>
                </div>
              </div>
              <div className="salary_filter">
              <div className="salary_jl">Salary</div>
              <div className="sal_bttn"><button className="locDrop"><img src = {Arrow} alt="text" style={{ width: 20, height:20,}} /></button></div>
              </div>
              <div className="partition_line"></div>
              <div className="exp_filter">
              <div className="exp_jl">Expierence</div>
              <div className="exp_bttn"><button className="locDrop"><img src = {Arrow} alt="text" style={{ width: 20, height:20,}} /></button></div>
              </div>
              <div className="partition_line"></div>
              <div className="jt_filter">
              <div className="jt_jl">Job type</div>
              <div className="loc_bttn"><button className="locDrop"><img src = {Arrow} alt="text" style={{ width: 20, height:20,}} /></button></div>
              </div>
              <div className="partition_line"></div>
              <div className="postedBy_filter">
              <div className="posted_jl">Posted by</div>
              <div className="posted_bttn"><button className="locDrop"><img src = {Arrow} alt="text" style={{ width: 20, height:20,}} /></button></div>
              </div>
              <div className="partition_line"></div>
              <div className="edu_filter">
              <div className="edu_jl">Education</div>
              <div className="edu_bttn"><button className="locDrop"><img src = {Arrow} alt="text" style={{ width: 20, height:20,}} /></button></div>
              </div>
              <div className="partition_line"></div>
              <div className="industries_filter">
              <div className="industry_jl">Industries</div>
              <div className="inds_bttn"><button className="locDrop"><img src = {Arrow} alt="text" style={{ width: 20, height:20,}} /></button></div>
              </div>
              <div className="partition_line"></div>
          </div>
          </div>
          </div>
          
          <div className="lists_con">
          {/* <div className="s_results"><span className="f_jl">Showing results for delivery driver jobs.</span> */}
          <div className="suggestions_jl">
                    <h3 className="js" >Java developer with AWS cloud</h3>
                    <div className="kompany_jl">
                      <div className="company_ng_jl"><img src = { Location_emoji } alt= "text" style={{ width: 13, height:13}}/><span className="ng_jol"> NexGen Iot Solutions,LLC</span></div>
                        <div className="kompany_loc_jl"><img src = { Location_emoji } alt= "text" style={{ width: 13, height:13}}/><span className="ng_jol">Jersy city,NzJ,USA</span></div>
                    </div>
                    <div className="job_details_jl">
                      <Link to ="/job-description"  className='details_btn_jl' style={{ textDecoration: 'none' }}><span className="vws"> View details</span></Link>
                      </div>
                    <div className="jobContent_jl">
                    <div className="nameConv_jl">
                    <div className="jobType_jl">Job type:<span className="fontTime">Full time</span></div>
                    <div className="jobClock_jl"><img src = { Time_piece } alt= "text" style={{ width: 13, height:13}}/><span className="fontTime">3 hours ago</span>
                    </div>
                    </div>
                    <div className="wClient_jl">W2 Position with our client. Open for H1B transfer candidates andcandidates (except CPT) on all the roles provided they have at least 2 years visa validity.
                         Submit your cv’s to Required Skills: 4-6 years of relevant</div>
                    </div>
                    
                    
                    <div className="company_logo_jl"><img src = { NexGen } alt= "text" style={{ width: 100, height:100}}/></div>
                    <div className="line_jl"></div>
                </div>
                
                <div className="suggestions_jl">
                    <h3 className="js" >Java developer with AWS cloud</h3>
                    <div className="kompany_jl">
                        <div className="company_ng_jl"><img src = { Location_emoji } alt= "text" style={{ width: 13, height:13}}/><span className="ng_jol"> NexGen Iot Solutions,LLC</span></div>
                        <div className="kompany_loc_jl"><img src = { Location_emoji } alt= "text" style={{ width: 13, height:13}}/>Jersy city,NJ,USA</div>
                    </div>
                    <div className="job_details_jl"><button className='details_btn_js'>View details</button></div>
                    <div className="jobContent_jl">
                    <div className="nameConv_jl">
                    <div className="jobType_jl">Job type:<span className="fontTime">Full time</span></div>
                    <div className="jobClock_jl"><img src = { Time_piece } alt= "text" style={{ width: 13, height:13}}/><span className="fontTime">3 hours ago</span>
                    </div>
                    </div>
                    <div className="wClient_jl">W2 Position with our client. Open for H1B transfer candidates andcandidates (except CPT) on all the roles provided they have at least 2 years visa validity.
                         Submit your cv’s to Required Skills: 4-6 years of relevant</div>
                    </div>
                    
                    
                    <div className="company_logo_jl"><img src = { NexGen } alt= "text" style={{ width: 100, height:100}}/></div>
                    <div className="line_jl"></div>
                </div>
                <div className="suggestions_jl">
                    <h3 className="js" >Java developer with AWS cloud</h3>
                    <div className="kompany_jl">
                        <div className="company_ng_jl"><img src = { Location_emoji } alt= "text" style={{ width: 13, height:13}}/><span className="ng_jol"> NexGen Iot Solutions,LLC</span></div>
                        <div className="kompany_loc_jl"><img src = { Location_emoji } alt= "text" style={{ width: 13, height:13}}/>Jersy city,NJ,USA</div>
                    </div>
                    <div className="job_details_jl"><button className='details_btn_js'>View details</button></div>
                    <div className="jobContent_jl">
                    <div className="nameConv_jl">
                    <div className="jobType_jl">Job type:<span className="fontTime">Full time</span></div>
                    <div className="jobClock_jl"><img src = { Time_piece } alt= "text" style={{ width: 13, height:13}}/><span className="fontTime">3 hours ago</span>
                    </div>
                    </div>
                    <div className="wClient_jl">W2 Position with our client. Open for H1B transfer candidates andcandidates (except CPT) on all the roles provided they have at least 2 years visa validity.
                         Submit your cv’s to Required Skills: 4-6 years of relevant</div>
                    </div>
                    
                    
                    <div className="company_logo_jl"><img src = { NexGen } alt= "text" style={{ width: 100, height:100}}/></div>
                    <div className="line_jl"></div>
                </div>
                <div className="suggestions_jl">
                    <h3 className="js" >Java developer with AWS cloud</h3>
                    <div className="kompany_jl">
                        <div className="company_ng_jl"><img src = { Location_emoji } alt= "text" style={{ width: 13, height:13}}/><span className="ng_jol"> NexGen Iot Solutions,LLC</span></div>
                        <div className="kompany_loc_jl"><img src = { Location_emoji } alt= "text" style={{ width: 13, height:13}}/>Jersy city,NJ,USA</div>
                    </div>
                    <div className="job_details_jl"><button className='details_btn_js'>View details</button></div>
                    <div className="jobContent_jl">
                    <div className="nameConv_jl">
                    <div className="jobType_jl">Job type:<span className="fontTime">Full time</span></div>
                    <div className="jobClock_jl"><img src = { Time_piece } alt= "text" style={{ width: 13, height:13}}/><span className="fontTime">3 hours ago</span>
                    </div>
                    </div>
                    <div className="wClient_jl">W2 Position with our client. Open for H1B transfer candidates andcandidates (except CPT) on all the roles provided they have at least 2 years visa validity.
                         Submit your cv’s to Required Skills: 4-6 years of relevant</div>
                    </div>
                    
                    
                    <div className="company_logo_jl"><img src = { NexGen } alt= "text" style={{ width: 100, height:100}}/></div>
                    <div className="line_jl"></div>
                </div>
                <div className="suggestions_jl">
                    <h3 className="js" >Java developer with AWS cloud</h3>
                    <div className="kompany_jl">
                        <div className="company_ng_jl"><img src = { Location_emoji } alt= "text" style={{ width: 13, height:13}}/><span className="ng_jol"> NexGen Iot Solutions,LLC</span></div>
                        <div className="kompany_loc_jl"><img src = { Location_emoji } alt= "text" style={{ width: 13, height:13}}/>Jersy city,NJ,USA</div>
                    </div>
                    <div className="job_details_jl"><button className='details_btn_js'>View details</button></div>
                    <div className="jobContent_jl">
                    <div className="nameConv_jl">
                    <div className="jobType_jl">Job type:<span className="fontTime">Full time</span></div>
                    <div className="jobClock_jl"><img src = { Time_piece } alt= "text" style={{ width: 13, height:13}}/><span className="fontTime">3 hours ago</span>
                    </div>
                    </div>
                    <div className="wClient_jl">W2 Position with our client. Open for H1B transfer candidates andcandidates (except CPT) on all the roles provided they have at least 2 years visa validity.
                         Submit your cv’s to Required Skills: 4-6 years of relevant</div>
                    </div>
                    
                    
                    <div className="company_logo_jl"><img src = { NexGen } alt= "text" style={{ width: 100, height:100}}/></div>
                    <div className="line_jl"></div>
                </div>
                
            
                {/* </div> */}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Job_suggestions;
