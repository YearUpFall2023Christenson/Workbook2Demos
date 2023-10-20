"use strict";

window.onload = init;

function init(){
    const helloBtnElement = document.getElementById("helloBtn");
    helloBtnElement.onclick = sayHi;

}



function sayHi() {
    alert("Hi there!, from the scripts/eventdemo1.js file!");
}