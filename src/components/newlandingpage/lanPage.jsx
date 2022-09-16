import React from 'react';
import  './lanPage.css';
import Landingpage from '../../assests/jobsSlate icons/lapage.svg';
import Bground from "../../assests/iconsnvectors/BGround.svg";
import Magnifier from '../../assests/jobsSlate icons/Icons_search.png';
import Location_emoji from '../../assests/jobsSlate icons/Icons_location.svg';
import NexG from '../../assests/jobsSlate icons/ngdp.png';
import IconArrow from '../../assests/jobsSlate icons/Icons_drop_left.png';
const LandPage = () => {
  return (
    <div
        className="background_jl"
        style={{ backgroundImage: `url(${Bground})`, height: "100%" }}
      >
    <div className='main-container'>
      <div className="topContainer">
        <div className="page_image_cp">
        <img src = {Landingpage} alt = 'text'  style={{ width: 300, height: 220 }}/>
        </div>
        <div className="head_page_header">
                <span className='hud_lp'>Search between <br/>more than<span className='addHead_cp'> 13.8 million<br /></span>
                    open <span className='addHead_cp'>jobs. </span></span>
            </div>
        
        </div> 
        <div className="id_container">
          <div className="inf_container">
            <div className="mag_LP"><img src = {Magnifier} alt= "text" style={{ width: 18, height:18}}/></div>
            <div className="inpBox_lp"><input type="text" placeholder=' Enter your location' style={{width:320,height:44,border:"none"}}/></div>
            <div className="loc_LP"><img src = {Location_emoji} alt= "text" style={{ width: 18, height:18}}/></div>
            <div className="inpBox_lp"><input type="text" placeholder=' Enter your location' style={{width:320,height:44,border:"none"}} /></div>
            <div className="serButton_lp"><button className='sBt_lp'><span className='sbTT'> Search</span></button></div>
          </div>
        </div>
        <div className="s_id_container">
          <div className="searchAsuggest">
          <span className='sjd_lp'>Search Jobs by Domains</span> 
          </div>
        </div>
        <div className="sugg_id_container_2">
          <div className="optBT">
            <button className='lpxBtn'><span className='rolesProv'> IT Services</span></button>
            <button className='lpxBtn'><span className='rolesProv'> Hospitality</span></button>
            <button className='lpxBtn'><span className='rolesProv'> BFSI</span></button>
            <button className='lpxBtn'><span className='rolesProv'> Business Process Management</span></button>
            <button className='lpxBtn'><span className='rolesProv'> Media, Entertainment & Telecom</span></button>
            <button className='lpxBtn'><span className='rolesProv'> Professional Services</span></button>
            <button className='lpxBtn'><span className='rolesProv'> Professional Services</span></button>
            <button className='lpxBtn'><span className='rolesProv'> Education </span></button>
            <button className='lpxBtn'><span className='rolesProv'> Manufacturing & Production</span></button>
            <button className='lpxBtn'><span className='rolesProv'> Infrastructure, Transport & Real Estate</span></button>
            <button className='lpxBtn'><span className='rolesProv'> Healthcare & Life Sciences</span></button>
            <button className='lpxBtn'><span className='rolesProv'> Miscellaneous</span></button>
            <button className='lpxBtn'><span className='rolesProv'> Design </span></button>
            <button className='lpxBtn'><span className='rolesProv'> IT Services</span></button>
          </div>
        </div>
        <div className="suggest_id_container">
          <div className="wi_container">
            <div className="feature_head">
            <span className='sjd_lp'>Featured companies actively hiring</span>
            </div>
            </div>
            </div>
            <div className="gud_wil">           
            <div className="companyTiles">
              <div className="lanPage_ct">
                <img src={NexG} alt='text' style={{width:100,height:100}}/>          
              </div>
              <div className="conTent">
              Digital transformation <br/>services provider.
              </div>
              <div className="lanP_button">
             <button className='detailsLanPage'> View jobs</button>
             </div>
            </div>
            <div className="companyTiles">
              <div className="lanPage_ct">
                <img src={NexG} alt='text' style={{width:100,height:100}}/>          
              </div>
              <div className="conTent">
              Digital transformation <br/>services provider.
              </div>
              <div className="lanP_button">
             <button className='detailsLanPage'> View jobs</button>
             </div>
            </div>
            <div className="companyTiles">
              <div className="lanPage_ct">
                <img src={NexG} alt='text' style={{width:100,height:100}}/>          
              </div>
              <div className="conTent">
              Digital transformation <br/>services provider.
              </div>
              <div className="lanP_button">
             <button className='detailsLanPage'> View jobs</button>
             </div>
            </div>
            <div className="companyTiles">
              <div className="lanPage_ct">
                <img src={NexG} alt='text' style={{width:100,height:100}}/>          
              </div>
              <div className="conTent">
              Digital transformation <br/>services provider.
              </div>
              <div className="lanP_button">
             <button className='detailsLanPage'> View jobs</button>
             </div>
            </div>
            <div className="companyTiles">
              <div className="lanPage_ct">
                <img src={NexG} alt='text' style={{width:100,height:100}}/>          
              </div>
              <div className="conTent">
              Digital transformation <br/>services provider.
              </div>
              <div className="lanP_button">
             <button className='detailsLanPage'> View jobs</button>
             </div>
            </div>
            <div className="companyTiles">
              <div className="lanPage_ct">
                <img src={NexG} alt='text' style={{width:100,height:100}}/>          
              </div>
              <div className="conTent">
              Digital transformation <br/>services provider.
              </div>
              <div className="lanP_button">
             <button className='detailsLanPage'> View jobs</button>
             </div>
            </div>
            </div>
            <div className="companiesAddHead">
            <div className="tch">
              Explore top companies hiring now.
            </div>
            </div>              
            <div className="tilePanel">
              <div className="cen_Hiring">
              <div className="tileLP">
                <div className="ringMas">
                <div className="cName_lp"> MNC's </div>
                <div className="iArrow"><img src = {IconArrow} alt= "text" style={{ width: 25, height:25}}/></div>
                </div>
                <div className="cHiring_num">1.3K+ are actively hiring</div>
                <div className="hiringCompanies_tiles">
                <div className="smallTile"><img src={NexG} alt='text' style={{width:30,height:25}}/></div>
                <div className="smallTile"><img src={NexG} alt='text' style={{width:30,height:25}}/></div>
                <div className="smallTile"><img src={NexG} alt='text' style={{width:30,height:25}}/></div>
                <div className="smallTile"><img src={NexG} alt='text' style={{width:30,height:25}}/></div>
                </div>
              </div>
              <div className="tileLP">
                <div className="ringMas">
                <div className="cName_lp"> MNC's </div>
                <div className="iArrow"><img src = {IconArrow} alt= "text" style={{ width: 25, height:25}}/></div>
                </div>
                <div className="cHiring_num">1.3K+ are actively hiring</div>
                <div className="hiringCompanies_tiles">
                <div className="smallTile"><img src={NexG} alt='text' style={{width:30,height:25}}/></div>
                <div className="smallTile"><img src={NexG} alt='text' style={{width:30,height:25}}/></div>
                <div className="smallTile"><img src={NexG} alt='text' style={{width:30,height:25}}/></div>
                <div className="smallTile"><img src={NexG} alt='text' style={{width:30,height:25}}/></div>
                </div>
              </div>
              <div className="tileLP">
                <div className="ringMas">
                <div className="cName_lp"> MNC's </div>
                <div className="iArrow"><img src = {IconArrow} alt= "text" style={{ width: 25, height:25}}/></div>
                </div>
                <div className="cHiring_num">1.3K+ are actively hiring</div>
                <div className="hiringCompanies_tiles">
                <div className="smallTile"><img src={NexG} alt='text' style={{width:30,height:25}}/></div>
                <div className="smallTile"><img src={NexG} alt='text' style={{width:30,height:25}}/></div>
                <div className="smallTile"><img src={NexG} alt='text' style={{width:30,height:25}}/></div>
                <div className="smallTile"><img src={NexG} alt='text' style={{width:30,height:25}}/></div>
                </div>
              </div>
              <div className="tileLP">
                <div className="ringMas">
                <div className="cName_lp"> MNC's </div>
                <div className="iArrow"><img src = {IconArrow} alt= "text" style={{ width: 25, height:25}}/></div>
                </div>
                <div className="cHiring_num">1.3K+ are actively hiring</div>
                <div className="hiringCompanies_tiles">
                <div className="smallTile"><img src={NexG} alt='text' style={{width:30,height:25}}/></div>
                <div className="smallTile"><img src={NexG} alt='text' style={{width:30,height:25}}/></div>
                <div className="smallTile"><img src={NexG} alt='text' style={{width:30,height:25}}/></div>
                <div className="smallTile"><img src={NexG} alt='text' style={{width:30,height:25}}/></div>
                </div>
              </div>
              <div className="tileLP">
                <div className="ringMas">
                <div className="cName_lp"> MNC's </div>
                <div className="iArrow"><img src = {IconArrow} alt= "text" style={{ width: 25, height:25}}/></div>
                </div>
                <div className="cHiring_num">1.3K+ are actively hiring</div>
                <div className="hiringCompanies_tiles">
                <div className="smallTile"><img src={NexG} alt='text' style={{width:30,height:25}}/></div>
                <div className="smallTile"><img src={NexG} alt='text' style={{width:30,height:25}}/></div>
                <div className="smallTile"><img src={NexG} alt='text' style={{width:30,height:25}}/></div>
                <div className="smallTile"><img src={NexG} alt='text' style={{width:30,height:25}}/></div>
                </div>
              </div>
              </div>
            </div>

 
        
      
    </div>
    </div>
  )
}

export default LandPage
