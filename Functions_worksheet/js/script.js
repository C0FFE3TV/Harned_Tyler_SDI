/*
 Tyler Harned
 Functions Worksheet
 Full Sail - SDI #03
 05/23/2015
 */

// Circle Circumference
console.log("Now running code for Circumference Calculator:"); // Let the user know what code is running

// Create the function
var radius = prompt("What is the radius?");
var circumference = calcCircumference(radius);
console.log("The Circumference of the circle is "+circumference);

function calcCircumference(radius)
{
    return 2 * 3.14 * radius; // Return the function
}

// Bee Stings
alert("Now running code for Bee Stings.");
console.log("Now running code for Bee Stings."); // Let the user know what code is running

// Create the function
var weight = prompt("How much does the animal weigh?"); // Gather information
var beesting = calcBeeSting(weight); // Create a parameter
console.log("It takes "+beesting+" bee stings to kill this animal."); // Log the results

function calcBeeSting(weight) // Function?
{
    return 8.666666667 * weight; // Return the function
}

//

