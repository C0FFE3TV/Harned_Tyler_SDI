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

// Create a calculator that determines the user's age based on their birthday
var month = prompt("What month where you born in: "); // Ask the user what month they where born in, and set it as a variable.

// Create a while loop to check if they typed in a month, or if they left it blank.
while(month!="january" && month!="february" && month!="march" && month!="april" && month!="may" && month!="june" && month!="july" && month!="august" && month!="september" && month!="november" && month!="october" && month!="december" || month===""){
    if(month!="january" && month!="february" && month!="march" && month!="april" && month!="may" && month!="june" && month!="july" && month!="august" && month!="september" && month!="november" && month!="october" && month!="december" ) {
        month = prompt("Please only type in the month.\nWhat month where you born in: \n\nExample: December"); // Prompt the user to type in a month (if they did it wrong)
        month = month.toLowerCase(); // Set the user's input to lowercase, to better suite the codee
    }else{
        month = prompt("Please don't leave this blank.\nWhat month where you born in:"); // Tell the user to not leave it blank and prompt them to enter it again.
    }
}
console.log("The user entered "+month+" as what month they where born in.");

// Ask the user what day of the month they where born on; set it as a variable
var day = prompt("What day of the month where you born on: ");

while(isNaN(day) || day===""){ // Create a while loop to make sure that the user has entered a number and/or didn't leave it blank
    if(isNaN(day)){
        day = prompt("Please only use numbers.\nWhat day of the month where you born on: "); // Prompt the user to only user numbers and ask them to enter the day
    }else{
        day=prompt("Please don't leave this blank.\nWhat day of the month where you born on: ");
    }
}
console.log("The user entered "+day+" as the day they where born on.");

// Ask the user what year they where born in; set it as a variable.
var year = prompt("What year where you born in: "); // set the user's data as a variable

// Create a while loop to see if the user used numbers, &&/or if they left it blank.
while(isNaN(year) || year==="") {
    if(isNaN(year)){
        year = prompt("Please only use numbers!\nWhat year where you born in: ");
    }else{
        year=prompt("Please don't leave this blank.\nWhat year where you born in: ");
    }
}