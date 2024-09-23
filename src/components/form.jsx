import React, { useState } from "react";
import "./form.css"
import axios from "axios"
export default function Form(){
    const [firstname,setFirstName]=useState("")
    const [email,setemail]=useState("")
    const [lastName,setLastName]=useState("")
    const [subject,setSubject]=useState("")
    const [message,setMessage]=useState("")

    function handleSubmit(e){
        e.preventDefault()

        let details={
            firstname:firstname,
            lastname:lastName,
            email:email,
            subject:subject,
            message:message
        }
        axios.post("http://localhost:5000/message/react",details)
        .then((res)=>{
            console.log(res.data.message)
        })
        .catch((error)=>{
            console.log(error)
            alert("Failed to send email. Please try again.");
        })
    }


    return <div className="formMain">
        <form className="formBody" onSubmit={handleSubmit} >
            <h1>Send us a Message!</h1>
            <div className="name">
                <section>
                    <p>First Name</p>
                    <input type="text" name="firstname" id="name" onChange={((e)=>{setFirstName(e.target.value)})}/>
                    <hr />
                </section>
                <section>
                    <p>Last Name</p>
                    <input type="text" name="lastname" id="lastname" onChange={((e)=>{setLastName(e.target.value)})}/>
                    <hr />
                </section>
            </div>
            <div className="subject">
                <section>
                    <p>Email</p>
                    <input type="email" name="email" id="email" onChange={((e)=>{setemail(e.target.value)})}/>
                    <hr />
                </section>
                <section>
                    <p>Subject</p>
                    <input type="text" name="subject" id="subject" onChange={((e)=>{setSubject(e.target.value)})}/>
                    <hr />
                </section>
            </div>
            <div className="message">
            <p>Message</p>
            <textarea name="message" id="message" onChange={((e)=>setMessage(e.target.value))}></textarea>
            </div>
            <button className="messageBtn" type="submit">Send Message</button>
        </form>
    </div>
}