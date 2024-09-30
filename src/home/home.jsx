import React from "react";
import Nav from "../components/nav";
import landingImage8 from "../images/africanchildren2.jpg"
import landingImage1 from "../images/landingimage5.JPG"
import landingImage2 from "../images/landingimage3.JPG"
import education from "../images/education.png"
import humanitarian from "../images/humanitarian.png"
import protection from "../images/protection.png"
import Donationbreakdwon from "../components/donationbreakdown";
import Contribute from "../components/contribute";
import Footer from "../components/footer";
import Project from "../components/projects";
import "./home.css"
import Typed from 'typed.js';
import { Link } from "react-router-dom";
export default function Body(){
    const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Centre for Youth and Sustainable Development [CYSD]",'Working to Prevent School Dropouts and Resolve Social Issues in Munyenge, Cameroon.'],
      typeSpeed: 100,
      backDelay: 3000,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

    return <div className="homeBody">
        <Nav/>
        <section className="landingImage">
            <img src={landingImage8} alt="smiling children" />
            <section className="descHolder">
            <h2 className="imageDesc"><span ref={el} /></h2>
            </section>
            <section className="statsSection">
            <p>389 students under our care</p>
            <hr />
            <p>50 Donations collected</p>
        </section>
        </section>
        <section className="aboutSection">
            <section className="aboutLeftSection">
            <div className="homeSectionTitle">
                <div id="divider"></div>
                <p>KNOW ABOUT US</p>
            </div>
            <h2>We Reduce School Dropouts & Tackle Social Issues in Munyenge, Cameroon.</h2>
            <p id="aboutDesc">Centre for Youth and Sustainable Development was founded in 2019 as a non-profit community-based organization. Our organization was founded to combat the high rate of secondary school dropout among young boys and girls in the Munyenge community. This alarming trend contributes to elevated rates of early pregnancy and childbearing among teenage girls, gender-based violence as well as increased susceptibility to drug abuse among young males.</p>
            <Link to="/about"><button>Learn More</button></Link>
            </section>
            <img src={landingImage1} alt="group of students" className="homeSectionImages"/>
        </section>
        <section className="whatWeDoSection">
            <div className="whatWeDoLeftSection">
            <div className="homeSectionTitle">
            <div id="divider"></div>
            <p>WHAT WE DO</p>
            </div>
            <h2>Some Services we provide for our students</h2>
            <p id="whatWeDoDesc">CYSD aims to break the cycle of educational inequality by addressing low reading proficiency in primary schools, the root cause of high secondary school dropout rates in rural communities in the Muyuka subdivison.</p>
            <section className="whatWeDo">
                <img src={education} alt="education icon" />
                <div>
                    <h4>Education</h4>
                    <p>CYSD has established temporary learning spaces and reopened formal schools in villages. These efforts have provided educational opportunities to over 1,700 internally displaced children.</p>
                </div>
            </section>
            <section className="whatWeDo">
                <img src={protection} alt="protection icon" />
                <div>
                    <h4>Protection</h4>
                    <p>CYSD works with children in communities impacted by the ongoing crisis in the Anglophone regions of Cameroon to help them heal from the trauma of witnessing unimaginable acts of violence.</p>
                </div>
            </section>
            <section className="whatWeDo">
                <img src={humanitarian} alt="Humanitarian icon" />
                <div>
                    <h4>Humanitarian assistance</h4>
                    <p>CYSD-Cameroon initiated the Humanitarian Response program, a leading initiative dedicated to identifying and aiding Internally Displaced Persons and their host communities.</p>
                </div>
            </section>
            <Link to="/whatwedo"><button>Learn More</button></Link>
            </div>
            <img src={landingImage2} alt="" className="homeSectionImages whatWeDoImage"/>
        </section>
        <Project/>
        <Donationbreakdwon/>
        <Contribute/>
        <Footer/>
    </div>
}