import React from 'react';
import './Footer.css';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';


function Footer() {

    return (
        <div className='Footer-container'>

            <hr />
            <div className="footer">
                <div className="social-links">
                    <Link to="https://github.com/Rajesh-Kumaran" target='_blank'><img src={Github} alt="github" /></Link>
                    <Link to="https://www.instagram.com/rajesh_kumaran26/" target='_blank'><img src={Instagram} alt="instagram" /></Link>
                    <Link to="https://www.linkedin.com/in/rajesh-kumaran-927085207/" target='_blank'><img src={LinkedIn} alt="linkedin" /></Link>
                </div>
                <div className='logo-f'>
                    <img src={Logo} alt="fitclub logo" />
                </div>
            </div>
            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>

        </div>
    )
}

export default Footer