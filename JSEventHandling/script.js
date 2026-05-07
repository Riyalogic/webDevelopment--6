// function bulb1ON(){
//     document.getElementById("bulb1").style.backgroundColor = "yellow";
// }
// function bulb1OFF(){
//     document.getElementById("bulb1").style.backgroundColor = "white";
// }

// function bulb2ON(){
//     document.getElementById("bulb1").style.backgroundColor = "red";
// }
// function bulb3ON(){
//      document.getElementById("bulb1").style.backgroundColor = "green";
// }


// function bulb1Red(){
//      document.getElementById("bulb1").style.backgroundColor = "red";
// }
// function bulb1Blue(){
//      document.getElementById("bulb1").style.backgroundColor = "blue";
// }
// function bulb1Green(){
//      document.getElementById("bulb1").style.backgroundColor = "green";
// }
// document.getElementById("bulbRed").addEventListener("click",bulb1Red)
// document.getElementById("bulb1Color").addEventListener("change",changeBulbColor);

// document 
// .getElementById("bulb1Color");
// document.addEventListener("change",changeBulbColor);

// function changeBulbColor(){
//    const color = document.getElementById("bulb1Color").value;
//    document.getElementById("bulb1").style.backgroundColor = color;
// }
// function changeBulbColor(){
//    const color = document.getElementById("bulb1Color").value;
//    document.getElementById("head").style.backgroundColor = color;
// }


document.getElementById("background").addEventListener("change",changeBackgroundColor);
document.getElementById("heading").addEventListener("change",changeHeadingColor)
document.getElementById("paragraph").addEventListener("change",changeParaColor)

function changeBackgroundColor(){
    const color = document.getElementById("background").value;
    document.getElementById("para").style.backgroundColor = color;
}
function changeHeadingColor(){
    const color = document.getElementById("heading").value;
    document.getElementById("head1").style.color = color;
}
function changeParaColor(){
    const color = document.getElementById("paragraph").value;
    document.getElementById("para").style.color = color;
}
function reset(){
    window.location.reload();
}

