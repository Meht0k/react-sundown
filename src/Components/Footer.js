import React from 'react';
import './Css/Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <section className="section-5">
        <div className="footer">
            <div className="footer-top">
                <div className="ft-left">
                    <ul className="f-list">
                        <li><Link to="/work">Work</Link></li>
                        <li><Link to="/studio">Studio</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        
                    </ul>
                </div>
                <div className="ft-right">
                    <p>Get industry insights and creative inspiration straight to your inbox.</p>
                    <div className="form">
                        <input type="email" placeholder="Email address" required />
                        <button type="submit"><i className="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom"> 
                <h1>Sundown</h1>
            </div>
            <div className="fb-bot">
                <p>Copyright © Sundown Studio</p>
                <p>Brooklyn, NY</p>
                <a href="https://www.instagram.com/_mehtab_ans/" target="_blank">Instagram</a>
                <a href="https://www.linkedin.com/in/mehtab-ansari-5620b61a1/" target="_blank" >LinkedIn</a>
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer
