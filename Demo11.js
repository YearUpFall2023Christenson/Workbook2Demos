"use strict";

console.log("Before function declaration")

function showGreetingInConsole() 
{
    let message = "Hello world!";
    console.log(message);
}


console.log("After function declaration, before function invocation");

showGreetingInConsole();
showGreetingInConsole();
showGreetingInConsole();

console.log("after function invocation");
