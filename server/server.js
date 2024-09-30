import express from "express";
import bodyParser from "body-parser"
import env from "dotenv"
import nodemailer from "nodemailer"
import cors from "cors"
import mailchimp from "@mailchimp/mailchimp_marketing";

const app=express();
env.config()
const { EMAIL_USER, EMAIL_PASS,SMTP_HOST, SMTP_PORT,SERVER_PORT,MAILCHIMP_APIKEY,MAILCHIMP_SERVER} = process.env;
const PORT=SERVER_PORT

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cors());
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

mailchimp.setConfig({
  apiKey: MAILCHIMP_APIKEY,
  server: MAILCHIMP_SERVER,
});

app.post("/email/react", async (req, res) => {
    const email = req.body.email;
    const name=req.body.name;
    const footerEmail=req.body.footerEmail;

    try{
        const response = await mailchimp.lists.addListMember("962ff373fc",{
            email_address: email||footerEmail,
            status:"subscribed",
            merge_fields: {
                FNAME: name||"",
                LNAME: "",  
            },
            update_existing: true,
        });
        res.status(200).json({ message: "Email added successfully to the list!" });
    }
    catch(error){
        console.error(error);
        res.status(500).json({ error: "Failed to add email to the list." });
    }
});


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})