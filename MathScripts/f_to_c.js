"use strict";



// Establish the starting values that we "know".
var fahrenheit = 80;


// Calculate any values that we don't 
// already know, but that we can figure out.

var celcius = (fahrenheit - 32) * 5 / 9;

// Display the results.

var message = "The Fehrenheit Temp: " + fahrenheit + " is the same as the Celcius Temp: " + celcius;
var message = `The Fehrenheit Temp: ${fahrenheit} is the same as the Celcius Temp: ${celcius}`;

console.log(message);

