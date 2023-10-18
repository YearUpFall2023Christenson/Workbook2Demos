

// Establish the starting values that we "know".
var savingsAmount = 12000;
var interestRateInPercentageWhole = 8;


// Calculate any values that we don't 
// already know, but that we can figure out.

var howManyYearsToDouble = 72 / interestRateInPercentageWhole;
var endingSavingsAmount = savingsAmount * 2;



// Display the results.
var message = "At an interest rate of " + interestRateInPercentageWhole + "%, your value would double in " + howManyYearsToDouble + " years!";
var message2 = "A savings of " + savingsAmount + " would become " + endingSavingsAmount

console.log(message);

console.log(message2);