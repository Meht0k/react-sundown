import React from 'react';
import './Css/Header.css'
import { Link } from 'react-router-dom';


function Header() {
    const Logo = "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg";


    return (
        <>
            <nav class="navbar">
                <div class="logo">
                    <Link to="/"><img src={Logo} alt="Logo" /></Link>
                </div>
                <ul class="lists">
                    <li><Link to="/work">Work</Link></li>
                    <li><Link to="/studio">Studio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Header;
