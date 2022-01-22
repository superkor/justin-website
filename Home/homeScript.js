//This script runs when the page finishes loading. This will cause the page to fade in as a transistion.
let interval;
let opacity = 0 ;
function fadeInStart(){
    interval = setInterval(function() {
            opacity += 0.01;
            start.style.opacity = opacity;
            //console.log(info.opacity);
        }, 5);
}

function stopTransitionOnLoadStart(){
    if (opacity > 1){
        clearInterval(interval);
        interval = null;
    }
}

document.getElementById("start").addEventListener("mousemove", stopTransitionOnLoadStart);

function isInViewport(el) {
    //get information about element
    const rect = el.getBoundingClientRect();

    //check the scroll y direction is less than element height and below the top of the element
    if (-1*(rect.y) < rect.height && rect.y < 0){
        return true;
    } else {
        return false;
    }
}

const AboutMe = document.querySelector('#AboutMe');
const Skills = document.querySelector('#Skills');
const Projects = document.querySelector('#Projects');
const Experiences = document.querySelector('#Experiences');
const ExtraCurriculars = document.querySelector("#ExtraCurriculars");
const ResumeDownload = document.querySelector("#ResumeDownload");

document.addEventListener('scroll', function () {
    //calls isInViewport function. if true, button is green. false: transparent
    if (isInViewport(AboutMe)){
        document.getElementById("AboutMeButton").style.backgroundColor = "green";
    } else {
        document.getElementById("AboutMeButton").style.backgroundColor = "transparent";
    }

    if (isInViewport(Skills)){
        document.getElementById("SkillsButton").style.backgroundColor = "green";
    } else {
        document.getElementById("SkillsButton").style.backgroundColor = "transparent";
    }

    if (isInViewport(Projects)){
        document.getElementById("ProjectsButton").style.backgroundColor = "green";
    } else {
        document.getElementById("ProjectsButton").style.backgroundColor = "transparent";
    }

    if (isInViewport(Experiences)){
        document.getElementById("ExperiencesButton").style.backgroundColor = "green";
    } else {
        document.getElementById("ExperiencesButton").style.backgroundColor = "transparent";
    }

    if (isInViewport(ExtraCurriculars)){
        document.getElementById("ExtraButton").style.backgroundColor = "green";
    } else {
        document.getElementById("ExtraButton").style.backgroundColor = "transparent";
    }

    if (isInViewport(ResumeDownload)){
        document.getElementById("ResumeButton").style.backgroundColor = "green";
    } else {
        document.getElementById("ResumeButton").style.backgroundColor = "transparent";
    }

}, {
    passive: true
});