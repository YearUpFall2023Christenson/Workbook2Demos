"use strict";

var firstName;
var lastName;

// assign a value "Matt" to the variable labeled firstName
firstName = "Matt";
// firstName has the value of Matt


// assign a value of "Christenson" to the variable labeled lastName
lastName = "Christenson";
// lastName now has the value of "Christenson"

var fullName;

// assign to the variable fullName the result of the expression "lastName + ", " + firstName".  
// that expression will concatenate the value of lastName, with the literal value ", ", followed by the value of firstName.
fullName = lastName + ", " + firstName;
// the value of fullName is now:  "Christenson, Matt"


var message;

message = "The user's full name is: " + fullName;

console.log(message);
//console.log(lastName);
//console.log(fullName);
console.log(firstName);
