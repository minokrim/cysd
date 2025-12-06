import React, { useState,useEffect } from "react";
import "./children.css"
import ChildrenData from "../content/children";
import axios from "axios";
export default function Children(){
    const[buttonState,setButtonState]=useState(false)
    const[children,setChildren]=useState([])
    function handleMouseEnter(){
        setButtonState(true)
    }
    function handleMouseLeave(){
        setButtonState(false)
    }
    // function getChildrenData(){
    // axios.get('https://cysdcam.org/wp-json/wp/v2/posts?slug=children')
    // .then((res)=>{
    //     const data=JSON.parse(res.data[0].acf.children)
    //     setChildren(data);
    // })
    //   }

    function getChildrenData(){
        setChildren(ChildrenData);
    }

          useEffect(() => {
        getChildrenData()
  }, []);

    return <div>
        <section className="children-Body">
            <h2>Start A Journey Ignite Hope & Change!</h2>
            <div className="children-container">
            {children.map((kid,index)=>(
                <div key={index} className="children-details">
                    <img src={`${kid.image}`} alt="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                    <p className="sponsorButton">{buttonState===true&&(<p>SPONSOR</p>)}</p>
                    <div>
                    <h3>Name: {kid.name}</h3>
                    <h4>Age: {kid.age} years old</h4>
                    </div>
                </div>
            ))}
            </div>
        </section>
    </div>
}