import React from "react";
import "./donationbreakdown.css"
import chart from "../images/chart.jpeg"
export default function Donationbreakdwon(){
    return <div className="breakdownMain">
        <section className="leftBreakdownSec">
            <h2>How we spend your donations and where it goes.</h2>
            <p>We recognize that when you donate, you want clarity on how your funds are spent. We promise full transparency in our financial practices.</p>
            <section className="breakDown">
                <div className="breakdownDesc">
                    <section className="breakdown1">
                        <div></div>
                        <p>30% Basic Education</p>
                    </section>
                    <section className="breakdown2">
                        <div></div>
                        <p>20% Child Protection</p>
                    </section>
                    <section className="breakdown3">
                        <div></div>
                        <p>15% Community Health</p>
                    </section>
                    <section className="breakdown4">
                        <div></div>
                        <p>20% Humanitarian Assistance</p>
                    </section>
                    <section className="breakdown5">
                        <div></div>
                        <p>15% Empowerment Program</p>
                    </section>
                </div>
            </section>
        </section>
        <img src={chart} alt="" />
    </div>
}