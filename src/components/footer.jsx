import React,{useState} from "react";
import "./footer.css"
import sponsor1 from "../images/sponsor1.png"
import sponsor2 from "../images/sponsor2.png"
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'

export default function Footer(){
    const [email,setEmail]=useState("");

    function handleSubmit(e){
        e.preventDefault();
        const data={
            footerEmail:email
        }
        axios.post("http://localhost:5000/email/react",data)
        .then((response)=>{
            console.log(response.data.message)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Thank you for subscribing",
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch((err)=>{
            console.log(err)
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Error occurred while subscribing. Please try again later.",
                showConfirmButton: false,
                timer: 1500
              });
        })
    }
    return <div className="footerMain">
        <section className="footerTop">
        <section className="footerSubscribe footer">
            <h3>Centre for Youth and Sustainable Development</h3>
            <p>Subscribe to get latest updates</p>
            <div className="newsletter">
                <form action="submit" onSubmit={handleSubmit}>
                <input type="text" name="" id="" placeholder="example@email.com" onChange={((e)=>{setEmail(e.target.value)})}/>
                <button type="submit">Subscribe</button>
                </form>
            </div>
        </section>
        <div className="footerOptions">
        <section className="footerSection footer">
            <h3>Home</h3>
            <div>
                <p>About us</p>
                <p>What we do</p>
                <p>Media</p>
                <p>Contact</p>
            </div>
        </section>
        <section className="footerSocials footer">
            <Link target="_blank" to><h3>Connect</h3></Link>
            <Link target="_blank" to="https://www.facebook.com/cysdcam"><p>Facebook</p></Link>
            <Link target="_blank"><p>Instagram</p></Link>
            <Link target="_blank" to="https://www.youtube.com/channel/UCk2dgfBK9ItoWYJ0z-PZ7dA"><p>Youtube</p></Link>
            <Link target="_blank" to="https://www.linkedin.com/company/cysdcameroon/?viewAsMember=true"><p>Linkedin</p></Link>
        </section>
        <section className="footer">
            <h3>Conatact</h3>
            <p>P.O Box 433 Buea</p>
            <p>info@cysdcam</p>
            <p>+237-674-679-298</p>
            <p>+237-654-549-610</p>
        </section>
        </div>
        </section>
        <section className="mapSection">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31834.518914641958!2d9.296842!3d4.158364!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106131c08c3bc5c7%3A0xc1f2ead9d66dc367!2sMile%20Eighteen%2018%20Junction!5e0!3m2!1sen!2scm!4v1725424901953!5m2!1sen!2scm" width="300" height="250" style={{border:0 }}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>
        <section className="sponsorHolder">
        <img src={sponsor1} alt="" />
        <img src={sponsor2} alt="" />
        </section>
        </section>
    </div>
}