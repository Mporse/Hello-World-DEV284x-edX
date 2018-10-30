var userName = window.prompt("Please enter your name:");
var userNum1 = parseInt(window.prompt("Please enter a number:"));
var userNum2 = parseInt(window.prompt("Please enter another number:"));

var greetingParagraph = document.getElementById("greeting");
greetingParagraph.innerHTML += userName;

var paragraph1 = document.getElementById("p1");
paragraph1.innerHTML += userNum1;
var paragraph2 = document.getElementById("p2");
paragraph2.innerHTML += userNum2;

var addition = document.getElementById("addition");
var additionNum = userNum1 + userNum2;
addition.innerHTML += userNum1 + " and " + userNum2 + " is " + additionNum + "<br>";

var subtraction = document.getElementById("subtraction");
var subtractionNum = userNum1 - userNum2;
subtraction.innerHTML += userNum1 + " and " + userNum2 + " is " + subtractionNum + "<br>";

var multiplication = document.getElementById("multiplication");
var multiplicationNum = userNum1 * userNum2;
multiplication.innerHTML += userNum1 + " and " + userNum2 + " is " + multiplicationNum + "<br>";

var division = document.getElementById("division");
var divisionNum = userNum1 / userNum2;
division.innerHTML += userNum1 + " and " + userNum2 + " is " + divisionNum + "<br>";

var modulus = document.getElementById("modulus");
var modulusNum = userNum1 % userNum2;
modulus.innerHTML += userNum1 + " and " + userNum2 + " is " + modulusNum + "<br>";