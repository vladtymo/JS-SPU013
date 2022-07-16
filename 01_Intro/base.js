// -=-=-=-=-=-=-=-=- console messages -=-=-=-=-=-=-=-=-
console.log("Hello JavaScript!");
console.warn("Some warning!");
console.error("Some error!");

// -=-=-=-=-=-=-=-=- data types -=-=-=-=-=-=-=-=-
let variable;           // undefined
variable = null;        // null

variable = 10;          // number
variable = 5.7;         // number

variable = "hello";     // string
variable = true;        // boolean
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