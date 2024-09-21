import React from "react";
import "./projects.css"
export default function Project(){
    return <div>
                <section className="projectSection">
            <div className="projectLeftSection">
            <div className="projectSectionTitle">
                <h3></h3>
                <p>PROJECTS WE HAVE DONE</p>
            </div>  
            <h2>We run programs in education, development, health, and conservation.</h2>
            <section className="projectsSection">
                <div className="project" id="proj1">
                    <h5>School Materials for IDPS</h5>
                    <button>Learn More</button>
                </div>
                <div className="project" id="proj2">
                    <h5>Sharing of food supplies to IDPS</h5>
                    <button>Learn More</button>
                </div>
                <div className="project" id="proj3">
                    <h5>Empowering Farmers with Tools</h5>
                    <button>Learn More</button>
                </div>
            </section>
            </div>
        </section>
    </div>
}