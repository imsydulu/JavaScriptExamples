function greet(name) {
    console.log("Hello " + name);
}

function greetWithCallback(name, callback) {
    callback(name);
}

greetWithCallback("Kalyani", greet);

function calculate(a, b, operation) {
    return operation(a, b);
}

let result = calculate(5, 10, function (x, y) {
    return x + y;
});
console.log("The sum of 5 and 10 is: " + result);

let result2 = calculate(10, 5, (x, y) => {
    return x - y;
});
console.log("The difference of 10 and 5 is: " + result2);

console.log("Start----");
setTimeout(() => {
    console.log("This is a callback function executed after 3 seconds");
}, 3000);
console.log("End----");