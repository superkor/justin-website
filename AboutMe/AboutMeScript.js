//This script runs when the page finishes loading. This will cause the page to fade in as a transistion.
let interval;
let opacity = 0 ;
function fadeInStart(){
    interval = setInterval(function() {
            opacity += 0.01;
            startAboutMe.style.opacity = opacity;
            //console.log(info.opacity);
        }, 5);
}

function stopTransitionOnLoadStart(){
    if (opacity > 1){
        clearInterval(interval);
        interval = null;
        start.style.opacity = 0;
        opacity = 0;
    }    
}

document.getElementById("startAboutMe").addEventListener("mousemove", stopTransitionOnLoadStart);
