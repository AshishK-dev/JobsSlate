import React from 'react'
import './jobdescription.css'
import Magnifier from '../../assests/iconsnvectors/search@72x.png'
import Location_emoji from '../../assests/iconsnvectors/locationsymbol.png'
import BGround from '../../assests/iconsnvectors/BGround.svg'
import NexGen from '../../assests/iconsnvectors/nexgeniot.jpg'
import Time_piece from '../../assests/iconsnvectors/time@72x.png'
import { Link } from 'react-router-dom'
const Jobdescription = () => {
  return (
   <>
   <div className="BKground"
    style={{ backgroundImage: `url(${BGround})`, height: "100vh" }}
    >
    <div className="search-box-container_jd">
            <div className="search-box_jd">
                <div className="Bar_jd">
                <div className="magnify_jd"> <img src = {Magnifier} alt= "text" style={{ width: 20, height:20}}/></div>
                <div className="job_profile_jd"> <input type="text" placeholder=' Enter job title' style={{border:"none"}} />
                </div>
                <div className="job_loc12_jd"> <img src = { Location_emoji } alt= "text"  style={{ width: 20, height:20}}/></div>
                <div className='job_area_jd'> <input type="text" placeholder=' Enter your location' style={{border:"none"}}  />
                </div>
            </div>
            <div className="job_search_jd"> <button className='search_btn_js'>Search</button></div>
            </div>
            <div className="custom_alert_jd"> <button className='cs_alert_btn_js'>Custom job alerts</button></div>

        </div>
    
    <div className="page_heading">
    <h4>Home/search/Job details</h4>
    <h2>Job details</h2>                               
    </div>
    <div className="main_container_jd">
    <div className="company_logo_jd"><img className='ngImage' src = { NexGen } alt= "text" style={{ width: 100, height:100}}/></div>
    <div className="suggestions_jd">
                    <h3 className="js_jd" >Java developer with AWS cloud</h3>
                    
                    <div className="kompany_jd">
                        <div className="company_ng_jd"><img src = { Location_emoji } alt= "text" style={{ width: 13, height:13}}/>NexGen Iot Solutions,LLC</div>
                        <div className="kompany_loc_jd  "><img src = { Location_emoji } alt= "text" style={{ width: 13, height:13}}/>Jersy city,NJ,USA</div>
                    </div>
                    <div className="job_details_jd"><Link to ="/login" className='details_btn_js1'>Apply now</Link></div>
                    <div className="jobContent_jd">
                    <div className="nameConv_jd">
                    <div className="jobType_jd">Job type:<span className="fontTime_jd">Full time</span></div>
                    <div className="jobClock_jd"><img src = { Time_piece } alt= "text" style={{ width: 13, height:13}}/><span className="fontTime">3 hours ago</span>
                    </div>
                    </div>
                    <div className="line_jd"></div>
                    </div>
                    
                    <div className="wClient_jd">
                      <h2 className='jd_Title'>Job description</h2>
                      <div className="jobDescription_jd">
                      Our client in the Greater Madison Region is looking for a Java Developer candidate for a long term contract opportunity. Top Skills & Years of Experience: Attached • Design, develop, and implement web-based Java J2EE applications using Java, Spring, JPA, Hibernate and web services to support business requirements • Contribute and engage in technical designs and complex application features, services, integrations, security, cloud, messaging, and databases. • Model and architect, the database as per application needs, define relationships across various database entity objects ensuring relational and referential integrity. • Create Microservices using Spring Boot and Spring Cloud and integrating with Kafka streaming platform. Nice to Have: Confluent Kafka , Dell Boomi, Dynatrace , Microsoft Azure Dvops responsibilities: The technologies are not limited to Java 1.8 and 11, JAX-RS, JAX-WS, Spring Core, Spring Cloud, Spring Boot, Apache Tomcat 8.5, Microsoft Azure, Git, SOAP UI, Linux, Confluent Kafka 5.4, Windows 10 and Linux , Dynatrace For certain assignments, Covid-19 vaccination and/or testing may be required by Randstad's client or applicable federal mandate, subject to approved medical or religious accommodations. Carefully review the job posting for details on vaccine/testing requirements or ask your Randstad representative for more information. Equal Opportunity Employer: Race, Color, Religion, Sex, Sexual Orientation, Gender Identity, National Origin, Age, Genetic Information, Disability, Protected Veteran Status, or any other legally protected group status.
                      </div>
                    </div>
                    <div className="line2_jd"></div>
                    
                    <div className="job_details2_jd"><button className='details_btn_js2'>Apply now</button></div>
                    </div>
          
      <div className='similar_positions'>
        <h2>Similar positions</h2>
        <div className="similar_positions_job1">Java developer in AWS cloud
        <div className="sp_font">
                        <div className="sp_j1"><img src = { Location_emoji } alt= "text" style={{ width: 13, height:13}}/>NexGen Iot Solutions,LLC</div>
                        <div className="sp_j1  "><img src = { Location_emoji } alt= "text" style={{ width: 13, height:13}}/>Jersy city,NJ,USA</div>
                    </div>
        </div>
        <div className="similar_positions_job1">Java developer in AWS cloud
        <div className="sp_font">
                        <div className="sp_j1"><img src = { Location_emoji } alt= "text" style={{ width: 13, height:13}}/>NexGen Iot Solutions,LLC</div>
                        <div className="sp_j1  "><img src = { Location_emoji } alt= "text" style={{ width: 13, height:13}}/>Jersy city,NJ,USA</div>
                    </div>
        </div>
        <div className="similar_positions_job1">Java developer in AWS cloud
        <div className="sp_font">
                        <div className="sp_j1"><img src = { Location_emoji } alt= "text" style={{ width: 13, height:13}}/>NexGen Iot Solutions,LLC</div>
                        <div className="sp_j1  "><img src = { Location_emoji } alt= "text" style={{ width: 13, height:13}}/>Jersy city,NJ,USA</div>
                    </div>
        </div>
        <div className="similar_positions_job1">Java developer in AWS cloud
        <div className="sp_font">
                        <div className="sp_j1"><img src = { Location_emoji } alt= "text" style={{ width: 13, height:13}}/>NexGen Iot Solutions,LLC</div>
                        <div className="sp_j1  "><img src = { Location_emoji } alt= "text" style={{ width: 13, height:13}}/>Jersy city,NJ,USA</div>
                    </div>
        </div>
        <div className="similar_positions_job1">Java developer in AWS cloud
        <div className="sp_font">
                        <div className="sp_j1"><img src = { Location_emoji } alt= "text" style={{ width: 13, height:13}}/>NexGen Iot Solutions,LLC</div>
                        <div className="sp_j1  "><img src = { Location_emoji } alt= "text" style={{ width: 13, height:13}}/>Jersy city,NJ,USA</div>
                    </div>
        </div>
        
      </div>
    </div>
    </div>
    

   </>
   
    
    
  )
}

export default Jobdescription