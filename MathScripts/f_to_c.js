"use strict";



// Establish the starting values that we "know".
var fahrenheit = 80;


// Calculate any values that we don't 
// already know, but that we can figure out.

var celcius = (fahrenheit - 32) * 5 / 9;

// var step1 = fahrenheit -32 ;

// var step2 = step1 * 5;

// var step3 = step2 / 9;

// celcius = step3;



// Display the results.

var message = "The Fehrenheit Temp: " + fahrenheit + " is the same as the Celcius Temp: " + celcius;

console.log(message);

