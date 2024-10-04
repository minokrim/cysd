import React from "react";
import "./founder.css"
import ig from "../images/instagram.png"
import fb from "../images/facebook.png"
import x from "../images/whatsapp.png"
import linkedin from "../images/linkedin.png"
import founder from "../images/founder.jpg"
import { Link } from "react-router-dom";
export default function Founder(){
    return <div className="founderMain">
        <section className="founderBody">
            <h2>Meet Our Founder</h2>
            <p>Founder of the Centre for Youth and Sustainable Development founded to combat the high rate of secondary school dropout among young boys and girls in the Munyenge community.</p>
            <section className="founder">
                <div className="founderDetails">
                    <img src={founder} alt="founder" />
                    <h3>OFORKA ANSLEM</h3>
                    <p>Executive Director</p>
                    <section className="founderSocials">
                        <Link to="https://www.linkedin.com/in/oforka-anslem-546765182/" target="_blank"><img src={linkedin} alt="linkedin logo" /></Link>
                        <Link to="https://api.whatsapp.com/send?phone=237674679298" target="_blank"><img src={x} alt="x formerly known as twitter logo" /></Link>
                        
                    </section>
                </div>
                <div className="founderAbout">
                    <h4>Founder's Bio</h4>
                    <p>Oforka Anslem is a dedicated individual hailing from the picturesque town of Buea. With a profound belief in the power of education and a genuine passion for improving society, Oforka has dedicated his life to making a positive impact on the lives of others.</p>
                    <p>Oforka's educational journey led him to obtain a master's degree in Management from the prestigious University of Buea. However, his professional path did not stop there. Initially starting as a teacher, Oforka spent six years imparting knowledge and shaping young minds. Seeking new challenges and opportunities, he then transitioned to become a cloud engineer.</p>
                    <p>What sets Oforka apart is not only his professional achievements but also his unwavering optimism and deep concern for humanity. Having experienced personal struggles during his early years, he understands firsthand the difficulties faced by many individuals around the world. This realization ignited his desire to make a difference, particularly in the lives of children who lack access to quality education and basic necessities.
                    </p>
                    <p>Driven by his unyielding belief that education is the key to transforming lives, Anslem aspires to ensure that underprivileged children in his community and beyond have the opportunity to receive an education. His vision extends to advocating for the provision of basic needs for those in need, recognizing that education alone is insufficient without addressing the broader challenges faced by disadvantaged individuals.</p>
                    <p>Oforka's passion, determination, and commitment to improving the lives of others serve as the driving force behind his endeavors. He firmly believes that, together, we can achieve the transformative goal of providing quality education and support to those in need.</p>
                </div>
            </section>
        </section>
    </div>
}