import React from "react";
import "./values.css"
export default function Values(props){
    return <div className="valuesMain">
        <section className="valuesBody">
            <img src={props.image}alt="" />
            <div className="valueDetail">
                <h3>{props.title}</h3>
                <p>{props.detail}</p>
            </div>
        </section>
    </div>
}