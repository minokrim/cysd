import "./whatwedo.css"
import marketwomen from "../images/agric.jpg"
import education from "../images/education.png"
import empowerment from "../images/empowerment.png"
import humanitarian from "../images/humanitarian.png"
import health from "../images/health.png"
import right from "../images/civil-rights.png"
import protection from "../images/protection.png"
import Nav from "../components/nav";
import Footer from "../components/footer";
import Contribute from "../components/contribute";
import Project from "../components/projects";
import Values from "../components/values";
import Value from "../content/values";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Principles from "../content/principles";
import { Link } from "react-router-dom";

export default function Whatwedo(){
    function showValues(val){
        return <Values
        key={val.id}
        image={val.img}
        title={val.title}
        detail={val.detail}
        />
    }
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return <div className="whatwedo-body">
        <Nav/>
        <section className="whatwedo-heading">
            <section className="whatwedo-leftSection">
            <div className="homeSectionTitle">
                <div id="divider"></div>
                <p>WHAT WE DO</p>
            </div>
        <h1>We are working across communities</h1>
        <p className="whatwedo-desc">We are deeply committed to improving the quality of life for vulnerable populations with a particular focus on women and children who have been severely affected by the ongoing conflict in the English-speaking regions of Cameroon. We understand the profound challenges these women and children face displacement, loss of family, lack of access to healthcare, stable shelter, basic education, and forceful teenage marriage for girls. Through our targeted interventions, we strive to provide comprehensive support to orphans and vulnerable children in hard-to-reach zones with accelerated and remedial education, psychosocial support, workshops, and training on agroecology techniques for women, livelihood assistance for internally displaced persons (IDPs) and micro-projects for community relief groups.</p>
        <Link to="https://paypal.me/cysdcam?country.x=LS&locale.x=en_US" target="_blank"><button>Donate</button></Link>
        </section>
        <section className="farmerimagecontainer">
        <img src={marketwomen} alt="farmers working" />
        </section>
        </section>
        <section className="documentary">
            <h2>What we do for the community</h2>
            <iframe src="https://www.youtube.com/embed/6z0QNZID-HY?si=0WTe4prfVnFsJO3W" title="YouTube video player"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" className="documentaryVideo"></iframe>
            </section>
        <section className="whatwedo-services">
            <section className="service-section">
                <div className="serv">
                    <img src={education} alt="eduvatio icon" />
                    <p>CYSD has created temporary learning spaces and reopened schools, providing education to over 1,700 displaced children.</p>
                </div>
                <div className="serv">
                    <img src={protection} alt="protection icon" />
                    <p>CYSD supports children in crisis-affected Anglophone regions of Cameroon, helping them heal from the trauma of witnessing violence.</p>
                </div>
                <div className="serv">
                    <img src={humanitarian} alt="humnaitarian icon" />
                    <p>CYSD-Cameroon launched the Humanitarian Response program to identify and support Internally Displaced Persons and their host communities.</p>
                </div>
                <div className="serv">
                    <img src={health} alt="health icon" />
                    <p>We implement community-driven projects to enhance health services for children, women, and indigenous populations through training, and education support.</p>
                </div>
                <div className="serv">
                    <img src={right} alt="rights icon" />
                    <p>CYSD promotes gender equality in Cameroon by fighting gender-based violence, advancing sexual health, empowering women, and supporting youth civic education.</p>
                </div>
                <div className="serv">
                    <img src={empowerment} alt="empowerment icon" />
                    <p>We offer vocational training to marginalized individuals, focusing on fields like IT and construction, to promote self-reliance and poverty alleviation.</p>
                </div>
            </section>
        </section>
        <section className="videos">
            <h2 className="mobileHeading">Events & Testimonials</h2>
            <div className="video-sec1">
            <iframe src="https://www.youtube.com/embed/xQ_-P_nrnxM"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" className="frame frame1" title="vid1"></iframe>
            <iframe src="https://www.youtube.com/embed/gIJREqi5nFI"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" className="frame frame1" title="vid2"></iframe>
            </div>
            <div className="videoTitle">
                <h2>Events & Testimonials</h2>
            </div>
            <div className="video-sec2">
            <iframe src="https://www.youtube.com/embed/sYRhk0CrW_c"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" className="frame frame1" title="vid3"></iframe>
            <iframe src="https://www.youtube.com/embed/YKTd3y8BYOE"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" className="frame frame1" title="vid4"></iframe>
            </div>
        </section>
        <section className="values-principles">
            <h2>Our Values</h2>
        <Carousel responsive={responsive} swipeable={true} infinite={true} minimumTouchDrag={10} autoPlay={true} autoPlaySpeed={2000} arrows={false}>
        {Value.map(showValues)}
        </Carousel>

        <h2>Our Principles</h2>
        <Carousel responsive={responsive} swipeable={true} infinite={true} minimumTouchDrag={10} autoPlay={true} autoPlaySpeed={2000} arrows={false} rtl={true}>
        {Principles.map(showValues)}
        </Carousel>
        </section>
        <Contribute/>
        <Footer/>
    </div>
}