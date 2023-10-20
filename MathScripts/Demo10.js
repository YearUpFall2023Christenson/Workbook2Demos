"use strict";

var age = 16;
var parentPresent = true;


if(
        // if they are a child, with a parent
        (age <= 18  &&  parentPresent) 
        || 
        // if they are an adult but not a senior
        (age < 62 && age > 18 )
    )
{

}