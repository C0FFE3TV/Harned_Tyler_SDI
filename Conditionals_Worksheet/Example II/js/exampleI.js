/*
 Tyler Harned
 Conditionals Worksheet
 Full Sail - SDI #03
 05/20/2015
 Example II
 */

/*Stuff your face I

To get in the heavyweight division of the Strawberry Festival’s pie eating contest you must weigh 250 lbs or more.  Determine whether an entrant qualifies based on his weight.

    Given:
Competitor’s weight.
    Result:
“The competitor qualifies for the heavyweight division.” Or  “ The competitor needs to gain some weight!”
*/

// Competitors weight

// Does he weight enough to enter?
var weight = prompt("What is the competitors weight? ");

// if he weight more than 250
if(weight < 250){
// if ihe weighs less than 250
    console.log("I'm sorry, but the competitor doesn't weight enough. He must weigh at least 250 lbs.");
}else{
// if the competitor weighs more than or equal to 250lbs.
    console.log("Horray! The competitor may enter the contest for he weighs more than 250lbs!");
}