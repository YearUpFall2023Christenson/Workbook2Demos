"use strict";

let annualIncome = 120000;
let filingStatus = "Joint";

let taxRate;


if(filingStatus == "Single"){
    //here, use first table to identify the correct value for taxRate;
    if(annualIncome < 12000){
        taxRate = 0.05;
    }
    else if (annualIncome < 25000){
        taxRate = 0.10;
    }
}
else if (filingStatus == "Joint"){
    //here, use second table to identify the correct value for taxRate;
    
}
else{
    console.log("ERROR!  Invalid filingStatus!");
}

