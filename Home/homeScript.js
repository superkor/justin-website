//This script runs when the page finishes loading. This will cause the page to fade in as a transistion.
let interval;
let opacity = 0 ;
function fadeInStart(){
    interval = setInterval(function() {
            opacity += 0.01;
            start.style.opacity = opacity;
            //console.log(info.opacity);
        }, 5);
    getRepoInfo();
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

let buttonList = ["AboutMeButton", "SkillsButton", "ProjectsButton", "EducationButton", "ExperiencesButton", "ExtraButton"]
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
const Education = document.querySelector('#Education');
const Experiences = document.querySelector('#Experiences');
const ExtraCurriculars = document.querySelector("#ExtraCurriculars");

document.addEventListener('scroll', function () {
    //calls isInViewport function. if true, button is green. false: transparent

    if (isInViewport(AboutMe)){
        document.getElementById("AboutMeButton").style.backgroundColor = "green";
        //console.log("1");
    } else {
        document.getElementById("AboutMeButton").style.backgroundColor = "transparent";
    }

    if (isInViewport(Skills)){
        document.getElementById("SkillsButton").style.backgroundColor = "green";
        //console.log("2");
    } else {
        document.getElementById("SkillsButton").style.backgroundColor = "transparent";
    }

    if (isInViewport(Projects)){
        document.getElementById("ProjectsButton").style.backgroundColor = "green";
        //console.log("3");
    } else {
        document.getElementById("ProjectsButton").style.backgroundColor = "transparent";
    }

    if (isInViewport(Education)){
        document.getElementById("EducationButton").style.backgroundColor = "green";
        //console.log("3");
    } else {
        document.getElementById("EducationButton").style.backgroundColor = "transparent";
    }

    if (isInViewport(Experiences)){
        document.getElementById("ExperiencesButton").style.backgroundColor = "green";
        //console.log("4");
    } else {
        document.getElementById("ExperiencesButton").style.backgroundColor = "transparent";
    }

    if (isInViewport(ExtraCurriculars)){
        document.getElementById("ExtraButton").style.backgroundColor = "green";
        //console.log("5");
    } else {
        document.getElementById("ExtraButton").style.backgroundColor = "transparent";
    }

}, {
    passive: true
});

function getRepoInfo(){
    //Create a request varaible and assign a new XMLHttpRequest object
    var request = new XMLHttpRequest();

    //Open a new connection using GET request on URL
    request.open('GET', 'https://api.github.com/users/superkor/repos', true);

    request.onload = function(){
        //Access JSON Data here
        var data = JSON.parse(this.response);
        //console.log(data);

        var statusHTML = '';

        $.each(data, function(i, status){
            //Begin Card
            statusHTML+='<div id="Project'+i+'"class="projectCards" style="text-align: center;">';
            //Header for card
            statusHTML+='<h3>'+'<a href='+status.html_url+' style="text-decoration: none; color: #FFD700; font-weight: bold;">'+status.name+'</a></h3>';
            //Description
            statusHTML+='<p>'+'<b style="color:rgb(190 51 218);">Description: </b>'+status.description+'</p>';
            //Language
            statusHTML+='<p>'+'<b style="color:rgb(190 51 218);">Language: </b>'+status.language+'</p>';
            //Last Update (Gets date from API and splits it at T(to get rid of the timestamp and only get date))
            statusHTML+='<p>'+'<b style="color:rgb(190 51 218);">Last Updated: </b>'+status.pushed_at.split('T')[0]+'</p>';
            //End Card
            statusHTML+='</div>';
        });

        $('cards').html(statusHTML);

    }

    //Send request

    request.send();
    getExperienceInfo();

}

function getExperienceInfo(){
    const info = new XMLHttpRequest();
    info.overrideMimeType("application/json");
    info.open("GET", "experiences.json", true);

    info.onload = function(){
        var jobs = JSON.parse(this.response);
        console.log(jobs);

        var output = '';

        $.each(jobs, function(i, status){
            output += '<div id="Experience"'+i+' class="experienceCards" style="text-align: center;">';
            output += '<h2><a href="'+status.companyLink+' style="text-decoration: none; color: #FFD700; font-weight: bold;">'+status.jobTitle+'</a></h2>';
            output += '<h3>'+status.companyName+'</h3>';
            output += '<h4 style="font-weight: normal;">'+status.location+'</h4>';
            output += '<h3 style="font-weight: normal;">'+status.length+'</h3>';
            output += '<h4>Description:<p>';
            for (var x = 0; x < status.description.length; x++){
                output+=status.description[x];
                if (x != status.description.length-1){
                    output+='<br>';
                }
            }
            output+='</p></div>';

            $('experienceCards').html(output);
        });
    }

    info.send();


}