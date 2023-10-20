"use strict";



// block statement 
//     a single other statement;

// block statement
//     {
//         one more many statements;

//     }

let age = 16;
let descriptionOfAge;

//////////////////////////////////////

if (age < 18 )
{
    descriptionOfAge = "Underage";
    descriptionOfAge += " ( age " + age + ")";
}
else 
{
    descriptionOfAge = "Adult";
}

///////////////////////////////////


console.log(descriptionOfAge);

