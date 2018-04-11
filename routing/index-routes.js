//Dependencies
//================================================
var path = require("path");
var db = require("../models");

//Routing
//================================================

module.exports = function(app) {

app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.post('/send', function(req,res) {
   var reply = req.body;
//    console.log(db);
//    console.log(db.Reply);
   db.Reply.create({
       name: reply.name,
       company: reply.company,
       email: reply.email,
       telephone: reply.telephone,
       message: reply.comments
   }).then(function(result) {
    res.redirect("/");
   });

 
});

};