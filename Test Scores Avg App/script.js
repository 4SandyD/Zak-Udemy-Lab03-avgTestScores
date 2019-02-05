//Global variables
var entry;
var average;
var score1;
var score2;
var score3;
var total = 0;


//Get 3 scores from the user and add them together
entry = window.prompt("Enter Test Score 1");
score1 = parseInt(entry);
total += score1;

entry = window.prompt("Enter Test Score 2");
score2 = parseInt(entry);
total += score2;

entry = window.prompt("Enter Test Score 3");
score3 = parseInt(entry);
total += score3;


//Calculate the average
average = parseInt(total / 3);


//Display the result
/*
document.write(score1 + " was the first score.<br>");
document.write(score2 + " was the second score.<br>");
document.write(score3 + " was the third score.<br>");
document.write(average + " is the average score.");
*/


//Another way to display
document.write("Score 1: " + score1 + "<br>");
document.write("Score 2: " + score2 + "<br>");
document.write("Score 3: " + score3 + "<br>");
document.write("Your Average Score: " + average + "<br>");