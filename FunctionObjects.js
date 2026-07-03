function add(a,b,c){
    console.log("the sum of a, b and c is: " + (a+b+c));
}

//console.log(add.arguments); // This will throw an error because 'arguments' is not defined in this scope
console.log("length: " + add.length);
console.log("name: " + add.name);
console.log("toString(): " + add.toString());
console.log("prototype: " + add.prototype);
console.log("constructor: " + add.constructor);
console.log("caller: " + add.caller);
console.log("arguments: " + add.arguments);
add.call(null, 1, 2, 3); // calling the function using call method
add.call();