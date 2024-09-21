import React from "react";
import "./footer.css"
export default function Footer(){
    return <div className="footerMain">
        <section className="footerTop">
        <section className="footerSubscribe footer">
            <h3>Centre for Youth and Sustainable Development</h3>
            <p>Subscribe to get latest updates</p>
            <div className="newsletter">
                <input type="text" name="" id="" placeholder="example@email.com"/>
                <button>Subscribe</button>
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
            <h3>Connect</h3>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Linkedin</p>
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
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31834.518914641958!2d9.296842!3d4.158364!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106131c08c3bc5c7%3A0xc1f2ead9d66dc367!2sMile%20Eighteen%2018%20Junction!5e0!3m2!1sen!2scm!4v1725424901953!5m2!1sen!2scm" width="300" height="250" style={{border:0 }}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </div>
}