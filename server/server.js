import express from "express";
import bodyParser from "body-parser"
import env from "dotenv"
import nodemailer from "nodemailer"
import cors from "cors"

const app=express();
env.config()
const { EMAIL_USER, EMAIL_PASS,SMTP_HOST, SMTP_PORT } = process.env;
const PORT=5000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cors());
console.log(EMAIL_PASS)
let transporter=nodemailer.createTransport({
    host:SMTP_HOST, 
    port:parseInt(SMTP_PORT),
    secure:true,
    auth:{
        user:EMAIL_USER,
        pass:EMAIL_PASS,
    }
})


app.post("/message/react",(req,res)=>{
    const email=req.body.email;
    const firstname=req.body.firstname;
    const lastname=req.body.lastname;
    const subject=req.body.subject;
    const message=req.body.message;

    console.log("Request Body:", req.body);

    if (!email || !firstname || !lastname || !subject || !message) {
        return res.status(400).json({ error: "All fields are required." });
    }
    let mailOptions={
        from:EMAIL_USER,
        to:"cysdcameroon@gmail.com",
        subject:subject,
        replyTo: email,
        text: `Dear CYSD, \n\n${firstname} ${lastname} has sent the following message: \n\n${message} \n\nKind regards, \n${firstname} ${lastname}`,
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log('Error occurred:', error);
          return res.status(500).json({ error: "Error sending email." });
        } else {
          console.log('Email sent:', info.response);
          return res.status(200).json({ message: "Email sent successfully!" });
        }
      });
})


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})