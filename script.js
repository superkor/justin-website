//This script runs when the page finishes loading. This will cause the page to fade in as a transistion.
let interval;
let opacity = 0 ;
let interval_two;
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
        opacity = 0;
    }    
}

function homeFadeIn(){
    console.log("test");
    interval_two = setInterval(function() {
            opacity += 0.01;
            document.getElementsByTagName("body")[0].style.opacity = opacity;
            //console.log(info.opacity);
        }, 5);
}

function stopTransitionHome(){
    if (opacity > 1){
            clearInterval(interval_two);
            interval_two = null;
            opacity = 0;
        }
}

document.getElementById("clearButton").addEventListener("click", stopTransitionOnLoadStart);
document.getElementsByTagName("body")[0].addEventListener("onmousemove", stopTransitionHome);
