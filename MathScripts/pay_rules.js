"use strict";

// what are our given starting values?

var payRate = 17.30;
var hoursWorked = 45;

if (hoursWorked <= 40){
    //no overtime.
    grossPay = payRate * hoursWorked;

}
else{
    //overtime logic goes here.
    var basePay = 40 * payRate;
    var overtimeHours = hoursWorked - 40;
    var overtimeRate = 1.5 * payRate;

    var overtimePay = overtimeHours * overtimeRate;
    grossPay = basePay + overtimePay;

}

console.log(grossPay);
//console.log(grossPay);