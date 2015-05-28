/*
Tyler Harned
Full Sail University
SDI #03
5/27/2015
GoTo Training Week 4
 */

// alert("Testing to see if connected.");
// console.log("Testing to see if connected.");

// Create code that will give us a random number between two numbers.
// Create a function that will do it and return that value.

// Ask the user for a minimum number
var min = prompt("Let's get a random number between two numbers.\nPlease type in a minimum number:");

/*
Outside of while loop
 - set a variable
   var x = 6;
 - create the while loop
   while(condition to test){
    OTHER CODE
    change to the variable, this avoids an infinite loop.
   }
 */

// Validate that prompt
while(min==="" || isNaN(min)){
    // This will run if conditional inside of () is true
    // re-prompt the user with the same variable name
    if(min===""){
        min=prompt("Please do not leave blank.\nPlease type in a minimum number:");
    }else{
        min=prompt("Please only use numbers.\nPlease type in a minimum number:");
    }
}

