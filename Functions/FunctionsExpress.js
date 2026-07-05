let add = function(a, b) {
    return a + b;
}
console.log("The sum of 7 and 3 is: " + add(7, 3)); // Calling the function and displaying the result
//arrow function with parameters and return type
let subtract = (x, y) => {
    return x - y;
}
console.log("The difference between 15 and 5 is: " + subtract(15, 5));
//arrow function in single line with parameters and return type
let add = (a,b) => a + b;
console.log("The sum of 8 and 2 is: " + add(8, 2)); // Calling the function and displaying the result
//iife (Immediately Invoked Function Expression)
(function() {
    let a = 20;
    let b = 30;
    let sum = a + b;
    console.log("The sum of a and b is: " + sum);
})(); // Immediately invoking the function

//IIFE with parameters
(function(x, y) {
    let sum = x + y;
    console.log("The sum of x and y is: " + sum);
})(10, 20); // Passing arguments to the IIFE

//IIfE with return value
let result = (function(x, y) {
    return x * y;
})(5, 6);   
console.log("The product of 5 and 6 is: " + result); // Displaying the result
//IIFE with arrow function
let result = ((x, y) => x / y)(20, 4);
console.log("The quotient of 20 and 4 is: " + result); // Displaying the result
//IIFE with arrow function and no parameters
(() => {
    let message = "Hello from IIFE with arrow function!";
    console.log(message);
})(); // Immediately invoking the arrow function
//IIFE with arrow function and parameters
((x, y) => {
    let sum = x + y;
    console.log("The sum of x and y is: " + sum);
})(15, 25);
//IIFE with arrow function and return value
let result = ((x, y) => x - y)(30, 10);
console.log("The difference between 30 and 10 is: " + result); // Displaying the result     
