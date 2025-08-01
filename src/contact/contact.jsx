import React from "react";
import "./contact.css"
import ig from "../images/instagram.png"
import fb from "../images/facebook.png"
import x from "../images/twitter.png"
import linkedin from "../images/linkedin.png"
import Nav from "../components/nav";
import Footer from "../components/footer";
import Form from "../components/form";
import { Link } from "react-router-dom";
export default function Contact(){
    return <div className="contactMain">
        <Nav/>
        <div className="contactBody">
        <section className="contactLeft">
        <div className="homeSectionTitle">
                <div id="divider"></div>
                <p>Contact Us</p>
            </div>
        <h1>We'd really love to hear from you.</h1>
        <p>Have any question in mind or want to enquire? Please feel free to contact us through the form or with the following details.</p>
        </section>
        <section className="contactRight">
            <div className="number">
                <h2>Lets talk!</h2>
                <p>+237-674-679-298</p>
                <p>+237-654-549-610</p>
                <p>info@cysdcam</p>
            </div>
            <div className="office">
                <h2>Head office</h2>
                <p>Mile Eighteen 18 Junction</p>
            </div>
            <div className="social">
                <Link to="https://www.instagram.com/cysdcameroon/" target="_blank"><img src={ig} alt="" /></Link>
                <Link to="https://www.facebook.com/cysdcam" target="_blank"><img src={fb} alt="" /></Link>
                {/* <Link to="https://www.youtube.com/channel/UCk2dgfBK9ItoWYJ0z-PZ7dA"><img src={x} alt="" /></Link> */}
                <Link to="https://www.linkedin.com/company/cysdcameroon/?viewAsMember=true" target="_blank"><img src={linkedin} alt="" /></Link>
            </div>
        </section>
        </div>
        <Form/>
        <Footer/>
    </div>
}