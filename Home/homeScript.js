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
    if (rect.top <=0 && rect.bottom >=0){
        return true;
    } else {
        return false;
    }
}

let buttonList = ["AboutMeButton", "SkillsButton", "ProjectsButton", "ExperiencesButton", "ExtraButton"]
function clickButton(clicked){
    document.getElementById(clicked).style.backgroundColor = "green";
    for (let x = 0; x < buttonList.length; ++x ){
        if (clicked!=buttonList[x]){
            document.getElementById(buttonList[x]).style.backgroundColor = "transparent";
        }
    }
}

const AboutMe = document.querySelector('#AboutMe');
const Skills = document.querySelector('#Skills');
const Projects = document.querySelector('#Projects');
const Experiences = document.querySelector('#Experiences');
const ExtraCurriculars = document.querySelector("#ExtraCurriculars");

document.addEventListener('scroll', function () {
    //calls isInViewport function. if true, button is green. false: transparent

    if (isInViewport(AboutMe)){
        document.getElementById("AboutMeButton").style.backgroundColor = "green";
        console.log("1");
    } else {
        document.getElementById("AboutMeButton").style.backgroundColor = "transparent";
    }

    if (isInViewport(Skills)){
        document.getElementById("SkillsButton").style.backgroundColor = "green";
        console.log("2");
    } else {
        document.getElementById("SkillsButton").style.backgroundColor = "transparent";
    }

    if (isInViewport(Projects)){
        document.getElementById("ProjectsButton").style.backgroundColor = "green";
        console.log("3");
    } else {
        document.getElementById("ProjectsButton").style.backgroundColor = "transparent";
    }

    if (isInViewport(Experiences)){
        document.getElementById("ExperiencesButton").style.backgroundColor = "green";
        console.log("4");
    } else {
        document.getElementById("ExperiencesButton").style.backgroundColor = "transparent";
    }

    if (isInViewport(ExtraCurriculars)){
        document.getElementById("ExtraButton").style.backgroundColor = "green";
        console.log("5");
    } else {
        document.getElementById("ExtraButton").style.backgroundColor = "transparent";
    }

}, {
    passive: true
});