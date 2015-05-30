/*
 Tyler Harned
 5/28/2015
 Full Sail University
 SDI #03
 Functions Assignment
 */

// Testing to see if connected.
// alert("Testing to see if connected.");
// console.log("Testing to see if connected.");

// Create a calculator to calculate salary based on hourly wage, hours worked

alert("Welcome! Today, we'll calculate your wage with or without overtime.\nWe'll need hourly wage, pay by weekly or bi-weekly, and hours worked.");

// Create a variable to determine how much the user gets paid hourly
var hourly = prompt("Please enter how much you get paid hourly: ");

// Validate the variable
while(hourly==="" || isNaN(hourly)){ // Check to see if it's blank, or not a number
    // Re-prompt the user to not leave it blank
    if(hourly===""){
        hourly=prompt("Please don't leave this blank!\nHow much do you get paid hourly: ");
        // Re-prompt the user to only use numbers
    }else{
        hourly=prompt("Please only use numbers.\nHow much do you get paid hourly: ");
    }
}

// Log this result into the console
console.log("The user gets paid $"+hourly+" per hour.");

// Create a variable to determine frequency paid
var salary = prompt("Please type in if you get paid weekly or bi-weekly: ");
salary=salary.toLowerCase(); // turn salary variable to lower case

// Validate the variable salary
while(salary==="" || salary!="weekly" && salary!="bi-weekly" && salary!="biweekly"){ // Check to see if the user left it blank or didn't enter a valid response
    if(salary===""){ // Code to run if it's blank
        salary=prompt("Please don't leave this blank!\nType in if you get paid weekly or bi-weekly: "); // re-prompt the user to not leave blanl
    }else{ // If not blank but not a valid response, run this
        salary=prompt("That's not a valid response.\nPlease type in if you get paid weekly or bi-weekly: "); // re-prompt the user to enter a valid response
    }
}

// Log this result into the console.
console.log("The user gets paid "+salary+".");

// Create a variable to gather hours worked
var hours = prompt("Please type in how many hours you get weekly: ");

// Validate the user's response
while(hours==="" || isNaN(hours)){
    if(hours===""){ // Code to run if the user left the field blank
        hours=prompt("Please don't leave this blank!\nPlease enter how many hours you get weekly: "); // re-prompt the user to not leave blank; gather new data
    }else{ // code to run if the user didn't leave blank, but didn't enter a number
        hours=prompt("Please only use numbers!\nPlease enter how many hours you get weekly: "); // re-prompt the user to only use numbers; assign new value
}
}

// Log this result into the console.
console.log("The user will get "+hours+" hours in a week.");

var baseHours = 40; // create a variable for a 40-hour work week
var overtime = calcOvertime(hours,baseHours); // Create a variable for the results in the function
console.log("The total amount of overtime in hours is "+overtime+"."); // Log it what the amount of overtime the user will get

// Create a function to determine how many hours of overtime the user has
function calcOvertime(base40,ot){
    var overPay = Number(base40) - Number(ot); // Calculation for the result
    return overPay; // return the result
}

function regPay(base40,hourly){ // create a function to calculate regular hourly wage
    var reg = Number(base40) * Number(hourly); // This is the calculation; make it assigned to variable reg
    return reg; // return the variable reg to the main code
}

var regularPay = regPay(baseHours,hourly); // assign the reg variable to a function in the main code
console.log("The user made $"+regularPay+" for working 40 hours."); // log out the result of what the user makes for working a base 40 hours


if((overtime>0)){ // If the overtime amount is greater than 0
    var c = hourly/2 + parseInt(hourly); // multiply hours by 1/2 to get overtime pay
    var d = c * overtime + Number(regularPay); // multiply overtime pay by overtime hours
    console.log("The user will earn $"+d+" from working "+overtime+" hours of overtime."); // log out the reslt
}

if(salary==="weekly"){ // If the user typed in weekly as their pay
    var a = d + parseInt(regularPay); // calculate a weekly wage; hourly wage times hours worked
    console.log("The user will earn $"+a+" from working "+hours+" hours. The user gets paid weekly."); // log out the result
}

if(salary==="bi-weekly" || salary==="biweekly"){ // if the user typed bi-weekly as their pay
    var b = hourly * hours * Number(2); // multiply hourly wage by hours by 2, resulting in the ariable 'b'
    console.log("The user will earn $"+b+" from working "+hours+" hours. The user gets paid bi-weekly."); // log out the result
}

var restart = prompt("Do you wish to restart? Type yes or no: ");

// Create a while loop to see if they typed in yes or no.
while(restart!="yes" && restart!="no"){
    restart=prompt("That's not a valid entry!\nPlease type in yes or no if you want to restart the code:");
    // Convert all text to lower case.
    restart=restart.toLowerCase();
}

for(yes==="yes"){
    console.log("Restarting code...");
}