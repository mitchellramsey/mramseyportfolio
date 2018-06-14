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
                clientId: keys.gmail.client_id,
                clientSecret: keys.gmail.client_secret,
            },
            tls: {
                rejectUnauthorized: false
            }      
        });

        var mailOptions = {
            from: `MRamseyPortfolio <mitchellramsey1992@gmail.com>`,
            to: 'mitchellramsey1992@gmail.com',
            subject: 'Portfolio Response',
            text: `Name: ${name}
Email: ${email}
Phone Number: ${telephone}
Company: ${company}
Comments: ${comments}`,
            auth: {
                user: keys.gmail.username,
                password: keys.gmail.password,
                refreshToken: '1/-CmGHADhqk590OnZjGq8Bje0ekMT_7BS_V2UKFQ8F79czY6QbmBMf5QCUfyc482i',
                accessToken: 'ya29.GlvaBfCGN1XzCuc77QU_1UwBgAhw41RbUpQFrul-rTpy51E3yxunCDGJaPwzD1-2aioGLr4jps6Ixnd1_KvgJN-mXPk-Gi-TjGy_REnwBga7xDtJHSk2jmAHW2Z1'
            }
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