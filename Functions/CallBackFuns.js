function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function calc(a,b,callback){
    return callback(a,b);
}

console.log("The sum of 5 and 10 is: " + calc(5,10,add));
console.log("The difference of 10 and 5 is: " + calc(10,5,subtract));
console.log("The product of 5 and 10 is: " + calc(5,10,multiply));
