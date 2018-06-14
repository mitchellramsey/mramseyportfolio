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
            ssl: true,
            use_authentication: true,
            auth: {
                type: "OAuth2",
                clientId: keys.gmail.client_id,
                clientSecret: keys.gmail.client_secret,
                user: keys.gmail.username,
                password: keys.gmail.password,
                refreshToken: '1/4_qNQIClUfan9TtN-bFA985S5_skWtWMaNkl9RbvmNc',
                accessToken: 'ya29.GlvaBUaFumeTFCaHGWzRf31Ma5EP5Hc5_o0slQXOBZ9xgV6zjgJw1NCUI1vBdUj_LafZoIIynXCB1qCIq77d7wbvwqQcTDJhd77ji_wfZeqjacwI1Rn5tb_mOAuR'
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