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
                refreshToken: '1/IKHFyoq1q77Pqd0RzVllDe3hFnmTY2N9iZJd3wGrW6U',
                accessToken: 'ya29.GlvbBY80pF9qTuSVQxu1oaWpi2-G1gNtkhDOr65-7PsSDZLENevd1TaU9kXzUe3Jgse7qgl_vpohSM5nW1TopK3L5Wq2lcl7KnWBmlIk5rLfBdgLCHvFoPxKjYGH'
            },
            tls: {
                rejectUnauthorized: false
            }      
        });

        var mailOptions = {
            from: `MRamseyPortfolio <mramseyportfolio18@gmail.com>`,
            to: 'mramseyportfolio18@gmail.com',
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