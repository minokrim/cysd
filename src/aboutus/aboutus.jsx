import React from "react";
import "./aboutus.css"
import Nav from "../components/nav";
import Footer from "../components/footer";
import africanboy from "../images/africanboy4.jpg"
import Founder from "../components/Founder";
import chart from "../images/organisationalchart2.jpg"
import Contribute from "../components/contribute";
export default function Aboutus(){
    return <div className="aboutusMain">
        <Nav/>
        <div className="aboutusBody">
            <section className="aboutusHeader">
                <div className="leftHeader">
                <div className="homeSectionTitle">
                <h3 id="divider"></h3>
                <p>KNOW ABOUT US</p>
                </div>
                    <h2>We are a non-governmental organization.</h2>
                </div>
                <div className="rightHeader">
                    <ul>
                        <li>CYSD addresses high secondary school dropout rates by improving primary school reading proficiency in Munyenge.</li>
                        <li>The organization aids orphans, displaced children, youth, and those affected by substance abuse, particularly in conflict-affected regions.</li>
                        <li>CYSD implements programs in education, social and economic development, gender-based violence prevention, and health education.</li>
                    </ul>
                </div>
            </section>
            <section className="missionBody">
                <img src={africanboy} alt="" />
                <section className="missionAndVision">
                <div className="mission">
                    <p>OUR MISSION</p>
                    <h3>We want to nurture minds and shape the future through programs in education, development, health, and conservation.</h3>
                    <h4>Our mission is that of nurturing Minds and shaping the Future for community regeneration and transformation.  Within this mission, we operate and run several programs ranging from Education, Social and Economic Development, Gender-based violence, environmental conservation, Community health education and others.</h4>
                </div>
                <div className="vision">
                    <p>OUR VISION</p>
                    <h3>Our vision is to empower communities through access to opportunities and sustainable development.</h3>
                    <h4>We envision a future where every individual, regardless of background or circumstance, has access to quality education, economic opportunities, and a safe environment. By nurturing minds, we aim to break the cycle of poverty and inequality, empowering communities to thrive and create lasting, positive change.</h4>
                </div>
                </section>
            </section>
            <Founder/>
            <section className="chart">
                <h2>Meet Our Team</h2>
                <p>At the heart of our mission is a dedicated team of passionate professionals committed to driving positive change in our communities. Each member brings a unique blend of skills, experience, and a deep commitment to our vision of empowering individuals through education, development, and sustainability. Together, we work tirelessly to create opportunities, foster growth, and make a lasting impact on the lives we touch. Meet the people who are turning our vision into reality, one step at a time.</p>
                <img src={chart} alt="" />
                <div className="organisationPosition">
                </div>
            </section>
            <Contribute/>
        </div>
    <Footer/>
    </div>
}