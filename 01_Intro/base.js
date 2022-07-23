// -=-=-=-=-=-=-=-=- console messages -=-=-=-=-=-=-=-=-
console.log("Hello JavaScript!");
console.warn("Some warning!");
console.error("Some error!");

// -=-=-=-=-=-=-=-=- data types -=-=-=-=-=-=-=-=-
let variable;           // undefined
variable = null;        // null

variable = 10;          // number: 10, 55.2, 100000, -1, NaN (not a number), Infinity+, Infinity-
variable = 5.7;         // number

variable = "hello";     // string: "hello", 'ABC', '$'
variable = true;        // boolean: true, false
variable = [1, 2, 3];   // object

//console.log("Variable = " + variable + ", Type: " + typeof(variable));
// interpolation
console.log(`Variable = ${variable}, Type: ${typeof (variable)}`);

// -=-=-=-=-=-=-=-=- dynamic typing -=-=-=-=-=-=-=-=-

//let func = function (a, b) { return a + b; }
let func = (a, b) => console.log(`${a} + ${b} = ${a + b}`);

console.log(`Func = ${func}, Type: ${typeof (func)}`); // function

let array = [1, 2, 3, 10.2, 'red', 'green', ['a', 'b', 'c'], true, func];

console.log("Element [3]: " + array[3]);
console.log("Element [-2]: " + array.at(-2));

array[8](6, 7); // invoke


// -=-=-=-=-=-=-=-=- browser dialogs -=-=-=-=-=-=-=-=-
alert("Some alert message. Hello!!!");

let username = prompt("Enter your name:");

console.log(`Username = ${username}, Type: ${typeof (username)}`);
console.log(`Hello dear ${username}!`);

// +{variable} - convert string to number
let number = +prompt("Enter current year:");

console.log(`Year = ${number}, Type: ${typeof (number)}`);
console.log(`Next year: ${number + 1}`);

let isContinue = confirm("Do you want to continue?");
console.log("Answer: " + (isContinue ? "Yes" : "No"));

// -=-=-=-=-=-=-=-=- base statements -=-=-=-=-=-=-=-=-
// if (condition) {

// } else {

// }

// switch (key) {
//     case value:
//         break;

//     default:
//         break;
// }

// while (condition) {

// }
// do {

// } while (condition);

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// }

// -=-=-=-=-=-=-=-=- functions -=-=-=-=-=-=-=-=-

// function declaration
function showMessage(text) {
    alert("Your message: " + text + "!");
}

showMessage("hello functions");

// function expression
//const mult = function(a, b) { return a + b; };
// arrow funciton 
const mult = (a, b) => a + b;

console.log("Function result: " + mult(10, 3));