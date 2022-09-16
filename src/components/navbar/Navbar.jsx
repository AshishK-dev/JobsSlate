import React from 'react'
import "./Navbar.css"
import ukflag from '../../assests/iconsnvectors/flag_uk.png'
import logo from  '../../assests/jobslateLogo.png'

const Navbar = () => {
  return (
    
    <header>
        <nav className="navbar">
            <div className="logo"><img src={logo} width="150px" height="25px" /></div>
            <ul>
                <li><a href="#"><span className='link_nav'>Location</span></a></li>
                <li><a href="#"><span className='link_nav'>Services</span></a></li>
                <li><a href="#"><span className='link_nav'>About</span></a></li>
                <li><a href="#"><span className='link_nav'>Find a job</span></a></li>

            </ul>
            <div className="dropdown_nav">
                <button className='btn_option'>Login</button>
                <button className='btn_option_r'>Register</button>
                
            </div>
            <div className="recLogin"></div>

        </nav>
    </header>
    
  )
}

export default Navbar;