//function without parameters and without return type
let a = 5;
let b = 10;
function addition() {
    let sum = a + b;
    console.log("The sum of a and b is: " + sum);
}
addition(); // Calling the function to execute it
//function with parameters and without return type
function multiply(x, y) {
    let product = x * y;
    console.log("The product of " + x + " and " + y + " is: " + product);
}   
multiply(4, 5); // Calling the function with arguments
//function with parameters and with return type
function subtract(x, y) {   
    let difference = x - y;
    return difference; // Returning the result
}
let result = subtract(10, 3); // Calling the function and storing the returned value
console.log("The difference between 10 and 3 is: " + result); // Displaying the result
//function without parameters and with return type
function getCurrentDate() {
    let currentDate = new Date();
    return currentDate; // Returning the current date
}
let currentDate = getCurrentDate(); // Calling the function and storing the returned value
console.log("The current date is: " + currentDate); // Displaying the result    
