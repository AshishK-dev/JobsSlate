import React from "react";
import "./locate.css";
import BackGround from "../../assests/iconsnvectors/backgroundlocation@72x.png";
import Compass from "../../assests/iconsnvectors/navigation@72x.png";
import IndiaFlag from "../../assests/iconsnvectors/flag india@72x.png";
import UnitedStates from "../../assests/iconsnvectors/flags@72x.png";
import CanadaFlag from "../../assests/iconsnvectors/flagcanada@72x.png";
import UkFlag from "../../assests/iconsnvectors/flag_uk.png";
import { Link } from "react-router-dom";

const Locate = () => {
  return (
    <div
      className="check"
      style={{ backgroundImage: `url(${BackGround})`,}}
    >
      <h1 className="heading">Choose Your Country</h1>
      <div className="teen">
        <div className="locator">
          <img className="locCompass" src={Compass} alt="compasd" />
        </div>
        <div className="country-container">
          <Link to={"/search" } style={{ textDecoration: 'none' }}>
          <div className="country-box">
            <img src={IndiaFlag} alt="text" style={{ width: 60, height: 40 }} />
            <span className="n_words"> India</span>
            
            <h1 className="job_numbers">7.9</h1>
           <div className="job_footers"><span className="n_words"> Hundred thousand jobs</span></div>
           
           </div>
           </Link>
           <Link to={"/search"} style={{ textDecoration: 'none' }}>
          <div className="country-box ">
            <img
              src={UnitedStates}
              alt="text"
              style={{ width: 60, height: 40 }}
            />
            <span className="n_words">UnitedStates</span>
            <h1 className="job_numbers">2.2</h1>
           <div className="job_footers"><span className="n_words"> Million jobs </span></div>
          </div>
          </Link>
          <Link to={"/search"} style={{ textDecoration: 'none' }}>
          <div className="country-box">
            <img
              src={CanadaFlag}
              alt="text"
              style={{ width: 60, height: 40 }}
            />
            <span className="n_words"> Canada</span>
            <h1 className="job_numbers">3.0</h1>
           <div className="job_footers"><span className="n_words"> Hundred thousand jobs </span></div>
          </div>
          </Link>
          <Link to={"/search"} style={{ textDecoration: 'none' }}>
          <div className="country-box">
            <img src={UkFlag} alt="text" style={{ width: 60, height: 40 }} />
            <span className="n_words">UnitedKingdom</span>
            <h1 className="job_numbers">8.6</h1>
           <div className="job_footers"><span className="n_words"> Hundred thousand jobs </span></div>
          </div>
          </Link>
        </div>
      </div>
      <div className="footer_container">
      <div className="footer">
        <div className="about us">About us  |</div>
        <div className="contact us">Contact us  |</div>
        <div className="faqs">FAQs  |</div>
        <div className="TnC">Terms and Conditions  |</div>
        <div className="rap">Report a problem  |</div>
        <div className="privacy">Privacy policy  |</div>
     
      </div>
      <div className="copyright"><span className="n_words">All rights reserved © 2021 Info Jobs Slate Ltd.</span> </div>
      </div>
    </div>
  );
};

export default Locate;
