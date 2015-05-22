/*
 Tyler Harned
 Conditionals Assignment
 Full Sail - SDI #03
 05/20/2015
 Budget Calculator
 */

// Welcome the user
alert("Welcome user! Today we'll see if you can budget correctly. This calculator will help you determine if you can afford an item or not. Enjoy!");

// Gather some data and create variables
var name = prompt("What is your name?");

// Log the user's name in the console
console.log("User's name is "+name+".");

// Continue to gather more information about the user
var check = prompt("How much was your check?");
var bills = prompt("How much is your total bills? ");
var savings = prompt("How much is the item you are wishing to purchase? ");

// Perform some basic calculations. This will be used later on.
left = check - bills - savings;
total = check - bills;

// Do some calculations to determine if they can afford the item they want to purchase
if(bills >= check){
// If bills are more than or equal to the check
    alert("Sorry! It looks like you cannot afford to get that item. You only made $"+check+" and your totals bills totaled out to be $"+bills+". The item that you want would set you back by $"+left+".");
    console.log("It looks like the user cannot afford this. He/she needs to make more money!");
}else if(left || total){
// If the total amount (after bills and check is subtracted) equals the amount of the item wanted
    alert("It looks like the item you want is equal to the amount of money that you have left!");
    console.log("The user cannot afford the item.");
}else{
    // If the amount of money left is more than the total amount of money left
    alert("Congrats! It looks like you have enough for that item you want! This was because your check was $"+check+" and your bills totaled out to be $"+bills+". Enjoy!");
    console.log("It looks like the user can afford the item!");
}

prompt("Thank you "+name+"! Hope you enjoyed. To restart, please refresh the browser.");