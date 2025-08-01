import React, { useState,useEffect } from "react";
import "./getinvolved.css"
import Footer from "../components/footer";
import Nav from "../components/nav";
import Children from "../components/children";
import Contribute from "../components/contribute";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'


export default function Getinvolved(){
    const [name, setName]=useState("")
    const [email,setEmail]=useState("")



    function handleSubmit(e){
        e.preventDefault()

        const data={
            name:name,
            email:email
        
        }
        axios.post("http://localhost:5000/email/react",data)
       .then((response)=>{
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you for join the Friendship Circle",
            showConfirmButton: false,
            timer: 1500
          });
       })
       .catch((error)=>{
        console.log(error)
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Error occurred while subscribing. Please try again later.",
            showConfirmButton: false,
            timer: 1500
          });
       })
    }

    return <div>
        <Nav/>
        <section className="getinvolved-heading">
        <div className="left-getinvolved-heading">
            <h1>Give a helping hand to those who need it!</h1>
            <p>At CYSD, we believe in the transformative power of collaboration. The Friendship Circle is our vibrant network, bringing together passionate individuals committed to sharing knowledge, learning from each other, and developing innovative solutions. By joining this dynamic community, you'll have the chance to exchange ideas, collaborate on meaningful projects, and drive impactful change towards a more sustainable future.</p>
        </div>
        <div className="right-getinvolved-heading">
        <h2>Join Friendship Circle</h2>
            <form action="submit" onSubmit={handleSubmit}>
                <input type="text" name="" id="" placeholder="Name:-John Doe" onChange={((e)=>{setName(e.target.value)})}/>
                <input type="email" name="" id="" placeholder="Email:-example@email.com" onChange={((e)=>{setEmail(e.target.value)})}/>
                <button type="submit">Subscribe</button>
            </form>
        </div>
        </section>
        <section className="program">
            <section className="program-card-holder1">
            <div className="program-card">
                <h2>Sponsor CYSD</h2>
                <p>Sponsor CYMD to empower youth and foster sustainable development in their communities. Your support, helps create lasting opportunities.</p>
                <Link to="/contact" target="_blank"><button>Sponsor CYMD</button></Link>
            </div>
            </section>
            <section className="program-card-holder2">
            <div className="program-card">
                <h2>Sponsor a child</h2>
                <p>Sponsor a child by supporting their education and offering hope for a brighter future. Every donation, big or small, makes a meaningful impact.</p>
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSeD725aq_VhtUonXlGERoTvJ9S6SWG_8BQNL0sDxhbt3wTwGQ/viewform" target="_blank"><button>Sponsor a child</button></Link>
            </div>
            </section>
            <section className="program-card-holder3">
            <div className="program-card">
                <h2>Skill contribution</h2>
                <p>Skill contribution lets you share your expertise to make a meaningful impact. Your talents help drive change, creating lasting improvements.</p>
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdEeg4zxa_lMGBWxqC_U7RPLS921YwVz1MF398ZC7Ws52Q3Gw/viewform" target="_blank"><button>Contribute skill</button></Link>
            </div>
            </section>
        </section>
        <section className="sponsor">
            <h2>Sponsor a Child</h2>
            <p className="sponsorDetails">Our sponsorship program provides a unique opportunity to profoundly impact a child's life. By contributing, you can support a child's access to education, bringing hope and creating a pathway to a brighter future. Every donation, regardless of size, helps make a meaningful difference and brings smiles to those who need it most. Join us in making a lasting impact today.</p>
            <section className="sponsorSections">
            <div className="sponsorRight">
            <h4>How sponsorship work?</h4>
            <section className="how-to-sponsor">
                <div className="steps">
                    <h3>1. Connect with a child</h3>
                    <p>Browse through profiles of children awaiting sponsorship or reach out to us to connect you with other children</p>
                </div>
                <div className="steps">
                    <h3>2. Make a Commitment</h3>
                    <p>Select a sponsorship plan that fits your budget. Your yearly commitment directly supports your sponsored child’s education.</p>
                </div>
                <div className="steps">
                    <h3>3. Build a Connection</h3>
                    <p>Exchange letters, photos, and updates with your sponsored child. Witness the impact of your support firsthand.</p>
                </div>
            </section>
            </div>
            <div className="sponsorLeft">
            <h4>Impact of your sponsorship</h4>
            <section className="impact-section">
            <div className="impact">
                    <h3>1. Education for All</h3>
                    <p>Your sponsorship ensures that a child, who may otherwise be denied an education, has the opportunity to attend school regularly.</p>
                </div>
                <div className="impact">
                    <h3>2. Breaking the Cycle of Poverty</h3>
                    <p>Education is the key to breaking the cycle of poverty. By sponsoring a child, you empower them with the tools for a brighter future.</p>
                </div>
                <div className="impact">
                    <h3>3. Empowering Communities</h3>
                    <p>When you sponsor a child, you contribute to the development of communities. Educated individuals become agents of change.</p>
                </div>
            </section>
            </div>
            </section>
            <Children/>
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSeD725aq_VhtUonXlGERoTvJ9S6SWG_8BQNL0sDxhbt3wTwGQ/viewform?usp=sf_link" target="_blank" className="sponsoraChild"><button >Sponsor a Child</button></Link>
        </section>
        <section className="skill">
            <h2>Skill contribution</h2>
            <h3>The Centre for Youth and Sustainable Development (CYSD) is currently welcoming applications from both local and international volunteers eager to contribute their skills and enthusiasm in at least two of the following areas of interest</h3>
            <section className="skill-roles">
                <div className="skill-card">
                    <h2>Village and community</h2>
                    <p>Assist in organizing meetings with villagers to identify local problems.</p>
                    <p>Design action plans to resolve pressing issues affecting the community.</p>
                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdEeg4zxa_lMGBWxqC_U7RPLS921YwVz1MF398ZC7Ws52Q3Gw/viewform?usp=sf_link" target="_blank"><button>Volunteer</button></Link>
                </div>
                <div className="skill-card">
                    <h2>Computer Training</h2>
                    <p>Organize computer classes for children, including school and holiday sessions.</p>
                    <p>Provide computer application training for women and adults.</p>
                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdEeg4zxa_lMGBWxqC_U7RPLS921YwVz1MF398ZC7Ws52Q3Gw/viewform?usp=sf_link" target="_blank"><button>Volunteer</button></Link>                </div>
                <div className="skill-card">
                    <h2>Human Rights Education</h2>
                    <p>Teach human rights in schools and communities.</p>
                    <p>Organize human rights educational and advocacy workshops.</p>
                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdEeg4zxa_lMGBWxqC_U7RPLS921YwVz1MF398ZC7Ws52Q3Gw/viewform?usp=sf_link" target="_blank"><button>Volunteer</button></Link>                </div>
                <div className="skill-card">
                    <h2>Leadership & Governance Education</h2>
                    <p>Family Planning in Rural Villages and Schools</p>
                    <p>Work on family planning initiatives in rural areas</p>
                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdEeg4zxa_lMGBWxqC_U7RPLS921YwVz1MF398ZC7Ws52Q3Gw/viewform?usp=sf_link" target="_blank"><button>Volunteer</button></Link>                </div>
                <div className="skill-card">
                    <h2>Fundraising & Grant Search</h2>
                    <p>Search for grants and funding sources to support CYSD’s various activities.</p>
                    <p>Identify donors for the sponsorship program.</p>
                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdEeg4zxa_lMGBWxqC_U7RPLS921YwVz1MF398ZC7Ws52Q3Gw/viewform?usp=sf_link" target="_blank"><button>Volunteer</button></Link>                </div>
                <div className="skill-card">
                    <h2>Environmental Education</h2>
                    <p>Prepare materials and conduct lectures on key environmental management issues in schools</p>
                    <p>Organize workshops for students to engage them in learning about the environment</p>
                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdEeg4zxa_lMGBWxqC_U7RPLS921YwVz1MF398ZC7Ws52Q3Gw/viewform?usp=sf_link" target="_blank"><button>Volunteer</button></Link>                </div>
            </section>
            <h4>If you are interested, please apply by filling out the CYSD-Cameroon-Volunteer-Application-form <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdEeg4zxa_lMGBWxqC_U7RPLS921YwVz1MF398ZC7Ws52Q3Gw/viewform?usp=sf_link" target="_blank"><span>Here</span></Link>. Your dedication and expertise will play a vital role in supporting our diverse range of initiatives. Thank you for considering joining the CYSD team!</h4>
        </section>
        <Contribute/>
        <Footer/>
    </div>
}