var projects = {
    details: [
        {
            name: "Hangman",
            description: "Simple front-end hangman game utilizing Javascript concepts",
            image: "assets/images/hangman.PNG",
            githubLink: "https://github.com/mramsey1992/hangman-game",
            demoLink: "https://mramsey1992.github.io/hangman-game/"
        },
        {
            name: "Crystal Collector",
            description: "A front-end logic game that utilizes Javascript/jQuery for gameplay, app was built using Bootstrap",
            image: "assets/images/crystal-collector.PNG",
            githubLink: "https://github.com/mramsey1992/week-4-game",
            demoLink: "https://mramsey1992.github.io/week-4-game/"
        },
        {
            name: "Sports Trivia",
            description: "A trivia game that utilizes Javascript/jQuery featuring concepts of Intervals and Timeouts",
            image: "assets/images/sportsTrivia.PNG",
            githubLink: "https://github.com/mramsey1992/triviaGame",
            demoLink: "https://mramsey1992.github.io/triviaGame/"
        },
        {
            name: "Liri Node App",
            description: "A back-end application that can retrieve tweets from Twitter, song information from Spotify, and movie information from the OMDB API. App is built utilizing Node.js",
            image: "assets/images/placeholder1.jpg",
            githubLink: "https://github.com/mramsey1992/liri-node-app",
            demoLink: ""
        },
        {
            name: "Bamazon",
            description: "A back-end application that utilizes Node and MySQL. Users can utilize the app as a customer or a manager. Customers can purchase products and managers can update inventories.",
            image: "assets/images/placeholder2.jpg",
            githubLink: "https://github.com/mramsey1992/bamazon",
            demoLink: ""
        },
        {
            name: "Friend Finder",
            description: "A back-end application that utilizes nodeJS, expressJS, and npm packages: path and body-parser. App users take a 10 question survey and are matched with the user that provided the most similar response.",
            image: "assets/images/friend-finder.PNG",
            githubLink: "https://github.com/mramsey1992/friendFinder",
            demoLink: "https://quiet-meadow-49757.herokuapp.com/"
        },
        {
            name: "Fantasy Baseball Draft Tracker",
            description: "A full-stack app that utilizes Javascript/jQuery, HandlerbarsJS, NodeJS, ExpressJS, MySQL, and Bootstrap to create an application that allows users to 'draft' baseball players (PUT), indicate if they were drafted by another team (DELETE), or add a player to the draft board (INSERT)",
            image: "assets/images/fantasybaseball.PNG",
            githubLink: "https://github.com/mramsey1992/fantasybaseball",
            demoLink: "https://nameless-gorge-13839.herokuapp.com/"
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
            
            
            var textDiv = document.createElement("div");
            textDiv.setAttribute("class", "text");
            textDiv.innerHTML = this.details[i].name;
            newDiv.appendChild(indexDiv);
            newDiv.appendChild(newImg);
            newDiv.appendChild(textDiv);
            document.getElementById("projects").appendChild(newDiv);

            var createDot = document.createElement("span");
            createDot.setAttribute("class", "dot");
            createDot.setAttribute("onClick", "currentSlide("+indexDisplay+")");
            document.getElementById("addDot").appendChild(createDot);

        }
    }
}

projects.slideshowCreator();

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