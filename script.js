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
        document.getElementById("Title").style.display = "none";
        document.getElementById("titleWrapper").style.display = "block";
        document.getElementById("home").style.display = "block";
        homeFadeIn();
        start.style.opacity = 0;
        opacity = 0;
    }    
}

function homeFadeIn(){
    interval = setInterval(function() {
            opacity += 0.01;
            start.style.opacity = opacity;
            //console.log(info.opacity);
        }, 5);
}

function stopTransitionHome(){
    if(document.getElementById("titleWrapper").style.display == "block"){
        if (opacity > 1){
                clearInterval(interval);
                interval = null;
                opacity = 0;
                start.style.opacity = 1;
            }
    }
}

document.getElementById("clearButton").addEventListener("click", stopTransitionOnLoadStart);
document.getElementById("start").addEventListener("mousemove", stopTransitionHome);
