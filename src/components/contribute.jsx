import React from "react";
import "./contribute.css"
import { Link } from "react-router-dom";
export default function Contribute(){
    return <div className="contributeMain">
        <section className="Contribute">
            <h2>You can help create a safe space for children in need.</h2>
            <div className="contributeButtons">
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdEeg4zxa_lMGBWxqC_U7RPLS921YwVz1MF398ZC7Ws52Q3Gw/viewform?usp=sf_link" target="_blank"><button className="contributeBtn1">Join as a Volunteer</button>
                </Link>
                <Link to="https://www.paypal.com/ncp/payment/BHGJW67JLL8ZU" target="_blank"><button className="contributeBtn2">Donate</button></Link>

                            </div>
        </section>
    </div>
}