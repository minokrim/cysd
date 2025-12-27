import { useState } from "react";
import "./aboutus.css"
import Nav from "../components/nav";
import Footer from "../components/footer";
import africanboy from "../images/africanboy4.jpg"
import Founder from "../components/Founder";
import structure from "../images/stafftable.jpg";
import vocational from "../images/vocational.jpeg";
import Contribute from "../components/contribute";
import Staff from "../content/staff";
import ScrollToTopButton from "../components/scrollbutton";
import axios from "axios";

export default function Aboutus(){
    const [team,setTeam]=useState([]);

//     function getstaffdata(){
//     axios.get('https://cysdcam.org/wp-json/wp/v2/posts?slug=Team')
//     .then((res)=>{
//         const data=JSON.parse(res.data[0].acf.children)
//         setTeam(data);
//     })
//       }

//           useEffect(() => {
//         getstaffdata()
//   }, []);


    function renderStaff(staff){
        return <Staff 
        key={staff.id}
        name={staff.name}
        position={staff.position}
        img={staff.img}/>;
    }
    return <div className="aboutusMain">
        <Nav/>
        <div className="aboutusBody">
            <section className="aboutusHeader">
                <div className="leftHeader">
                <div className="homeSectionTitle">
                <div id="divider"></div>
                <p>KNOW ABOUT US</p>
                </div>
                    <h2>We are a Community based organization.</h2>
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
                <img src="https://www.cysdcam.org/wp-content/uploads/2025/11/africanboy4-scaled.jpg" alt="" fetchpriority="high" loading="eager"/>
                <section className="missionAndVision">
                <div className="mission">
                    <p>OUR MISSION</p>
                    <h3>Drive lasting change by equipping communities, especially youth, women, and children, with the knowledge, skills, and resources they need for improved literacy, personal well-being, and economic self-sufficiency.</h3>
                </div>
                <div className="vision">
                    <p>OUR VISION</p>
                    <h3>Build Communities where literacy, well-being, and economic independence are accessible to all especially the most vulnerable</h3>
                </div>
                </section>
            </section>
            <section className="cysdActivities">
                <img src="https://www.cysdcam.org/wp-content/uploads/2025/11/vocational.jpeg" alt="" />
                
                <div className="cysdActivitiesRight">
                    <h2>CYSD carries out its mission on behalf of its members by:</h2>
                        <li>Advocating for return to school in the English-speaking regions of Cameroon and address high secondary school dropout rates by improving primary school reading proficiency in rural communities. </li>
                        <li>Acting as an advocate for human rights, Genda bases violence and promotes Civic Education.</li>
                        <li>Providing a forum for dialogue and exchange among local communities to share ideas, learn, and support each other’s efforts. </li>
                        <li>Helping communities to build their capacity, to serve their population, especially the poor and marginalised more effectively. </li>
                        <li>promoting better livelihoods through vocational training and workshops to empower the underprivileged.</li>
                        <li>providing good health services to communities through health campaigns</li>
                        <li>supporting development in rural communities. </li>
                </div>
            </section>
            <section className="chart">
                <h2>Meet Our Team</h2>
                <p>At the heart of our mission is a dedicated team of passionate professionals committed to driving positive change in our communities. Each member brings a unique blend of skills, experience, and a deep commitment to our vision of empowering individuals through education, development, and sustainability. Together, we work tirelessly to create opportunities, foster growth, and make a lasting impact on the lives we touch. Meet the people who are turning our vision into reality, one step at a time.</p>
                <div className="organisationPosition">
                    {Staff.map((staff,index)=>(
                        <div key={index} className="positions">
                            <img src={staff.img} alt="" className="staff-img" loading="lazy"/>
                            <div className="staff-det">
                            <h4>{staff.name}</h4>
                            <h5>{staff.position}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Contribute/>
        </div>
    <Footer/>
    </div>
}