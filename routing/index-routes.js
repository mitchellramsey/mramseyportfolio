//Dependencies
//================================================
require("dotenv").config();
var keys = require("../key.js");
var path = require("path");

var nodemailer = require('nodemailer');


//Routing
//================================================

module.exports = function(app) {

app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.post('/send', function(req,res) {
   var { name, company, email, telephone, comments } = req.body;

   //Setting Up NodeMailer
    //===========================================================
    
    
    if(name != "" && email != "", comments != "") {
        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: "OAuth2",
                user: keys.gmail.username,
                password: keys.gmail.password,
                clientId: keys.gmail.client_id,
                clientSecret: keys.gmail.client_secret,
                refreshToken: '1/XIewfzc2NiWEABh6raGoIt_GoKMD3VLlFHit6W6sYvs'
            },
            tls: {
                rejectUnauthorized: false
            }      
        });

        var mailOptions = {
            from: `${name} <${email}>`,
            to: 'mitchellramsey1992@gmail.com',
            subject: 'Portfolio Response',
            text: `Name: ${name}
Email: ${email}
Phone Number: ${telephone}
Company: ${company}
Comments: ${comments}`
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if(err) {
                console.log(err);
            } else {
                console.log("The message was sent");
                console.log(info);
            }
        })

        res.redirect('/');
    } else {
        res.status(404).send("You must fill out the name, email, and comments fields in order to send a message");
    }
 
});

};