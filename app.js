// Prompt se hum user se input lete hy
let num1 = prompt("enter first number");
let num2 = prompt("enter second number");

// string ko number ma convert kiya hy
num1 = Number(num1);
num2 = Number(num2);

console.log("num1: ", num1);
console.log("num2: ", num2);

let sum = num1 + num2;
let minus = num1 - num2;
let multiplay = num1 * num2;
let devide = num1 / num2;

alert("Addition " + sum);
alert("Subtraction " + minus);
alert("Multiplication " + num1 * num2);
alert("Division " + num1 / num2);