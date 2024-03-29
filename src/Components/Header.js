import React from 'react';
import './Css/Header.css'
import { Link, Outlet } from 'react-router-dom';


function Header() {
    const Logo = "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg";


    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <Link to="/"><img src={Logo} alt="Logo" /></Link>
                </div>
                <ul className="lists">
                    <li><Link to="/work">Work</Link></li>
                    <li><Link to="/studio">Studio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className='menu'>
                    <p>Menu</p>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Header;
