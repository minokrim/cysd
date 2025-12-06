import React, { useState } from "react";
import "./nav.css"
import logo from "../images/cysdlogo.png"
import hamburger from "../images/hamburger.png"
import hamburger2 from "../images/hamburger2.png"
import { Link } from "react-router-dom";
export default function Nav(){
    const[mobileNav,setMobileNav]=useState(false)
    function handleClick(){
        setMobileNav(!mobileNav)
    }

    return <div className="navMain">
        <section className="navBody">
        <section className="navLogo">
            <Link to="/"><img src="https://www.cysdcam.org/wp-content/uploads/2025/11/cysdlogo.png" alt="cysd Logo" /></Link>
            
        </section>
        <section className="navOptions">
            <Link to="/" className="link">Home</Link>
            <Link to="/about" className="link">About Us</Link>
            <Link to="/whatwedo" className="link">What We Do</Link>
            <Link to="/getinvolved" className="link">Get Involved</Link>
            <Link to="/contact" className="link">Contact</Link>
        </section>
        <section className="DonateIcon">
            <Link to="https://www.paypal.com/ncp/payment/BHGJW67JLL8ZU" className="donatePc" target="_blank"><p>Donate</p></Link>
        </section>
        <img src={mobileNav?hamburger2:hamburger} alt="hamburger icon" id="hamburger" onClick={handleClick}/>
        </section>
        {mobileNav && (
        <section className="mobileNavOptions" id="mobileNav" onClick={handleClick}>
            <Link to="/" className="Link">Home</Link>
            <Link to="/about" className="Link">About Us</Link>
            <Link to="/whatwedo" className="Link">What We Do</Link>
            <Link to="/getinvolved" className="Link">Get Involved</Link>
            <Link to="/contact" className="Link">Contact</Link>
            <Link to="https://www.paypal.com/ncp/payment/BHGJW67JLL8ZU" target="_blank" className="donatePc"><p className="donate">Donate</p></Link>
        </section>
        )}
    </div>
}