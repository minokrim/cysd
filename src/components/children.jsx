import React, { useState } from "react";
import "./children.css"
import ChildrenData from "../content/children";
export default function Children(){
    const[buttonState,setButtonState]=useState(false)
    function handleMouseEnter(){
        setButtonState(true)
    }
    function handleMouseLeave(){
        setButtonState(false)
    }
    return <div>
        <section className="children-Body">
            <h2>Start A Journey Ignite Hope & Change!</h2>
            <div className="children-container">
            {ChildrenData.map((kid)=>(
                <div key={kid.id} className="children-details">
                    <img src={kid.image} alt="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                    <p className="sponsorButton">{buttonState==true&&(<p>SPONSOR</p>)}</p>
                    <div>
                    <h3>Name: {kid.name}</h3>
                    <h4>Age: {kid.Age} years old</h4>
                    </div>
                </div>
            ))}
            </div>
        </section>
    </div>
}