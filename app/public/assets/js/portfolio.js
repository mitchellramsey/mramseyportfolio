var projects = {
    details: [
        {
            name: "Charlotte Disc-Golf",
            description: "A full stack application that allows user to track their scores at disc golf courses while being provided information about the courses and respective holes. Users will create an account through their Google account, then can look up courses, play a new round of disc golf, or browse through their round history.",
            image: "assets/images/charlottediscgolf.PNG",
            githubLink: "https://github.com/mramsey1992/charlotte_discgolf",
            demoLink: "https://stormy-scrubland-88373.herokuapp.com/"
        },
        {
            name: "React Demo - Clicky Game",
            description: "A clicky game that illustrates the many advanced features of React such as components, states, and props",
            image: "assets/images/react-demo.PNG",
            githubLink: "https://github.com/mramsey1992/react-demo",
            demoLink: "http://ramsey-react-demo.herokuapp.com/"
        },
        {
            name: "Fantasy Baseball Draft Tracker",
            description: "A full-stack app that utilizes Javascript/jQuery, HandlerbarsJS, NodeJS, ExpressJS, MySQL, and Bootstrap to create an application that allows users to 'draft' baseball players (PUT), indicate if they were drafted by another team (DELETE), or add a player to the draft board (INSERT)",
            image: "assets/images/fantasybaseball.PNG",
            githubLink: "https://github.com/mramsey1992/fantasybaseball",
            demoLink: "https://nameless-gorge-13839.herokuapp.com/"
        },
        {
            name: "MongoDB Scraper - Charlotte Observer Edition",
            description: "A web app that will scrape Charlotte Observer articles. Users will be able to save articles and leave notes about the articles. This app is designed to demonstrate the uses of MongoDB. The app is a full stack app that utilizes MongoDB, Express, Node, Handlebars, Bootstrap and jQuery. MongoDB captures the title, link, and caption for all articles on the local news of the Charlotte Observer. Users are then able to save documents and leave comments. Comments would then post on the comment screen afterwards.",
            image: "assets/images/mongodb-demo.PNG",
            githubLink: "https://github.com/mramsey1992/mongodb_demo",
            demoLink: "http://ramsey-mongodb-demo.herokuapp.com/"
        },
        {
            name: "Friend Finder",
            description: "A back-end application that utilizes nodeJS, expressJS, and npm packages: path and body-parser. App users take a 10 question survey and are matched with the user that provided the most similar response.",
            image: "assets/images/friend-finder.PNG",
            githubLink: "https://github.com/mramsey1992/friendFinder",
            demoLink: "https://quiet-meadow-49757.herokuapp.com/"
        },
        {
            name: "Sports Trivia",
            description: "A trivia game that utilizes Javascript/jQuery featuring concepts of Intervals and Timeouts",
            image: "assets/images/sportsTrivia.PNG",
            githubLink: "https://github.com/mramsey1992/triviaGame",
            demoLink: "https://mramsey1992.github.io/triviaGame/"
        }
    ],
    slideshowCreator: function() {
        console.log(this);
        for(var i = 0; i<this.details.length; i++) {
            var indexDisplay = i + 1;
            var newDiv = document.createElement("div");
            newDiv.setAttribute("class", "mySlides fade");
            newDiv.setAttribute("data-id", i);
           
           
            var indexDiv = document.createElement("div");
            indexDiv.setAttribute("class", "numbertext");
            indexDiv.innerHTML += indexDisplay + "/" + this.details.length;
           
           
            var newImg = document.createElement("img");
            newImg.setAttribute("id", "projectImage");
            newImg.setAttribute("src", this.details[i].image);
            newImg.setAttribute("alt", this.details[i].name + " image");
            newImg.setAttribute("data-id", i);
            newImg.addEventListener("click", this.modalDisplay);
            
            
            var textDiv = document.createElement("div");
            textDiv.setAttribute("class", "text");
            textDiv.innerHTML = this.details[i].name;
            newDiv.appendChild(indexDiv);
            newDiv.appendChild(newImg);
            newDiv.appendChild(textDiv);
            document.getElementById("display-project").appendChild(newDiv);

            var createDot = document.createElement("span");
            createDot.setAttribute("class", "dot");
            createDot.setAttribute("onClick", "currentSlide("+indexDisplay+")");
            document.getElementById("addDot").appendChild(createDot);

        }

    },
    modalDisplay: function() {
        var modal = document.getElementById("projectModal");
        var header = document.getElementById("projectName");
        var span = document.getElementById("close");
        var project = projects.details[this.dataset.id];
        modal.style.display = "block";
        span.onclick = function() {
            modal.style.display = "none";
        }
        window.onclick = function() {
            if(event.target == modal) {
                modal.style.display = "none";
            }
        }
        document.getElementById("projectName").innerHTML = project.name;
        document.getElementById("description-area").innerHTML = project.description;
        var githubButton = document.createElement("button");
        githubButton.setAttribute("id", "githubButton");
        githubButton.setAttribute("onClick", "window.open('" + project.githubLink + "', '_blank')");
        githubButton.innerHTML = "Github Code";
        var demoButton = document.createElement("button");
        demoButton.setAttribute("id", "demoButton");
        demoButton.setAttribute("onClick", "window.open('" + project.demoLink + "', '_blank')");
        demoButton.innerHTML = "Demo";
        document.getElementById("button-area").innerHTML = "";
        document.getElementById("button-area").appendChild(githubButton);
        document.getElementById("button-area").appendChild(demoButton);
        
    }
}

projects.slideshowCreator();
// document.getElementById("projectImage").addEventListener("click", projects.modalDisplay);
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if(n > slides.length) {
        slideIndex = 1;
    }
    if(n < 1) {
        slideIndex = slides.length;
    }
    for(var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for(var i = 0; i< dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

}

function displayLinks() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}