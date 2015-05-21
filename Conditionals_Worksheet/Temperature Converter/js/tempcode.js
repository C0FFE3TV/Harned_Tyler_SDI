/*
 Tyler Harned
 Conditionals Worksheet
 Full Sail - SDI #03
 05/20/2015
 Celsius to Fahrenheit converter
 */

// Gather input for the temperature
var temp = prompt("What is the temperature? ");
var type = prompt("Is that Fahrenheit or Celsius? Input either an F or C: ");

// Decide if converting to Fahrenheit or Celsius

if(type === 'F'){
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


