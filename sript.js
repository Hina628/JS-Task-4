// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

document.write(`<h1>Arithmetic:</h1>`);

var a = 10;
 
document.write(`Result </br>`);
document.write(`The value of a is: ${a} </br>`);
document.write(`----------------------------- </br></br>`);

document.write(`The value of ++a is: ${++a}</br>`);
document.write(`Now the value of a is: ${a}</br></br>`);

document.write(`The value of a++ is: ${a++}</br>`);
document.write(`Now the value of a is: ${a}</br></br>`);

document.write(`The value of --a is: ${--a}</br>`);
document.write(`Now the value of a is: ${a}</br></br>`);

document.write(`The value of a-- is: ${a--}</br>`);
document.write(`Now the value of a is: ${a}</br></br>`);

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

document.write(`<h1>Variables</h1>`);

var a = 2;
var b = 1;

var result =(--a - --b + ++b + b--);

document.write(`a is ${a}</br>`);
document.write(`b is ${b}</br>`);

document.write(`rsult is ${result}</br></br>`);


// 3. Write a program that takes input a name from user &
// greet the user.



var user = prompt("Enter your username");

document.write(`Good Night! ${user}`);

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5

document.write(`<h1>Table:</h1>`);

var table = 5;
var table = prompt("Enter a number!")|| 5;

document.write(`${table} x 1 = ${table * 1} </br>`);
document.write(`${table} x 2 = ${table * 2} </br>`);
document.write(`${table} x 3 = ${table * 3} </br>`);
document.write(`${table} x 4 = ${table * 4} </br>`);
document.write(`${table} x 5 = ${table * 5} </br>`);
document.write(`${table} x 6 = ${table * 6} </br>`);
document.write(`${table} x 7 = ${table * 7} </br>`);
document.write(`${table} x 8 = ${table * 8} </br>`);
document.write(`${table} x 9 = ${table * 9} </br>`);
document.write(`${table} x 10 = ${table * 10} </br>`);

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// ALERTS | JAVASCRIPT
// Page 3 of 3
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table).


//--------------------------------------------------------------------------------------------------------------------------//

