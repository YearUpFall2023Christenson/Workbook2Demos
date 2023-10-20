"use strict";

window.onload = init;

function init(){
    const helloBtn = document.getElementById("helloBtn");
    helloBtn.onclick = sayHi;

}



function sayHi() {
    alert("Hi there!, from the scripts/eventdemo1.js file!");
}