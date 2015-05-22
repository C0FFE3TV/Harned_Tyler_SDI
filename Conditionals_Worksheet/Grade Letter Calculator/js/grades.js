/*
 Tyler Harned
 Conditionals Worksheet
 Full Sail - SDI #03
 05/20/2015
 Grade Letter Calculator
 */

// Get some basic information
var percent = prompt("What percentage do you have in the class? ");

// Do the calculations
if(percent < 'F'){
// If it's converting to Celsius
    console.log("Converting to Celsius!");
    celsius = (temp - 32) * 5/9;
    console.log(temp+" degrees Fahrenheit is "+celsius+" degrees in Celsius!");
}else{
// If it's converting to Fahrenheit
    console.log("Converting to Fahrenheit!");
    fahrenheit = (temp * 9/5) + 32;
    console.log(temp+" degrees Celsius is "+fahrenheit+" degrees in Fahrenheit!")
}