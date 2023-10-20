"use strict";

function showGreeting() {
    let messageDiv = document.getElementById("messageDiv");
    messageDiv.innerHTML = "Hello World!";
    console.log("the message that is in the log");
}

showGreeting();