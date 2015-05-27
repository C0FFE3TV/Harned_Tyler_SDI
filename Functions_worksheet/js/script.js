/*
 Tyler Harned
 Functions Worksheet
 Full Sail - SDI #03
 05/23/2015
 */

// Circle Circumference
alert("Now running code for Circumference Calculator:"); // Alert the user to let them know what code is running
console.log("Now running code for Circumference Calculator:"); // Log it in the console.

// Calculations
var radius = prompt("What is the radius?"); // Gather radius information
var circumference = calcCircumference(radius); // Create the function
console.log("The Circumference of the circle is "+circumference); // Log the results

function calcCircumference(radius) // Create the parameters
{
    return 2 * 3.14 * radius; // Return the function
}

// Bee Stings
alert("Now running code for Bee Stings."); // Let the user know what code is running
console.log("Now running code for Bee Stings."); // Log what code is running in the console.

// Calculations
var weight = prompt("How much does the animal weigh?"); // Gather information
var beesting = calcBeeSting(weight); // Create the function
console.log("It takes "+beesting+" bee stings to kill this animal."); // Log the results

function calcBeeSting(weight) // Create the parameters
{
    return 8.666666667 * weight; // Return the function
}