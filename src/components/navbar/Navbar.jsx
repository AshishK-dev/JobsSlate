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
                <li><a href="#">Find a job</a></li>
                <li><a href="#">Find talent</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Location</a></li>

            </ul>
            <div className="dropdown">
                <button className='lang_select'><img src={ukflag} alt="text" width="15" height="10" />
                    USA </button>
            </div>

        </nav>
    </header>
    
  )
}

export default Navbar;