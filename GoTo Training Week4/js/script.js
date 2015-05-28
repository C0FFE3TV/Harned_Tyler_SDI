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

// Ask the user for a maximum number
var max = prompt("Please type in a maximum number:");

// Validate the maximum number
while(max==="" || isNaN(max) || Number(max)<Number(min)){
    // Re-prompt the user
    if(max===""){
        max=prompt("Please do not leave blank.\nPlease type in a maximum number:");
    }else if(Number(max)<Number(min)){
        max=prompt("The maximum number is less than the minimum number! Please make sure that the maximum value is greater than "+min+".\nPlease type in a maximum number:");
    }else{
        max=prompt("Please only use numbers.\nPlease type in a maximum number:");
    }
}

// Function call - nameOfFunction();
// "GO BUTTON"
// Arguments go inside of function call
// Need a variable to catch the returned value
var results = randomCalc(min,max);
console.log("You're random number between "+min+" and "+max+" is "+results+".");

// Create a function to calculate the random number
/*
function functionName(parameters){
    CODE TO RUN EVERYTIME THE FUNCTION IS CALLED
}
*/

// Make function flexible by using arguments and parameters
// These send information into a function and catches it there

function randomCalc(minNum,maxNum){
    // Find a random number
    // Math.random() - gives a random number between 0 & 1
    // Math.round(variable) - basic rounding
    var randomNumber = Math.round(Math.random()*(maxNum-minNum) + Number(minNum));
    // console.log(randomNumber);
    // Return the value to our main code
    return randomNumber;
}

// Create a for loop to get 15 random numbers
for(var i=0;i<15;i++){
    console.log(randomCalc(1,10));
}

var yesOrNo=prompt("Please type in yes or no:");

// Create a while loop to see if they typed in yes or no.
while(yesOrNo!="yes" && yesOrNo!="no"){
    yesOrNo=prompt("Please type in only yes or no:");
    // Convert all text to lower case.
    yesOrNo=yesOrNo.toLowerCase();

}