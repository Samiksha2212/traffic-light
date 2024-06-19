function turnOnRed(){
    document.getElementById("stopButton").style.backgroundColor="red";
    document.getElementById("readyButton").style.backgroundColor="grey";
    document.getElementById("goButton").style.backgroundColor="grey";
    document.getElementById("stopLight").style.backgroundColor="red";
    document.getElementById("readyLight").style.backgroundColor="grey";
    document.getElementById("goLight").style.backgroundColor="grey";
}


function turnOnYellow(){
    document.getElementById("stopButton").style.backgroundColor="grey";
    document.getElementById("readyButton").style.backgroundColor="yellow";
    document.getElementById("goButton").style.backgroundColor="grey";
    document.getElementById("stopLight").style.backgroundColor="grey";
    document.getElementById("readyLight").style.backgroundColor="yellow";
    document.getElementById("goLight").style.backgroundColor="grey";
}

function turnOnGreen(){
    document.getElementById("stopButton").style.backgroundColor="grey";
    document.getElementById("readyButton").style.backgroundColor="grey";
    document.getElementById("goButton").style.backgroundColor="green";
    document.getElementById("stopLight").style.backgroundColor="grey";
    document.getElementById("readyLight").style.backgroundColor="grey";
    document.getElementById("goLight").style.backgroundColor="green";
}