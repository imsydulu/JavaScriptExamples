console.log("hell js")
console.log("hell js, iam learning node js, i am coming")
var a = 10;
var b = 20;
var c = a + b;
console.log("the sum of a and b is: " + c);
//string data type
var name = "John Doe";
console.log("the name is: " + name);
//number data type
var age = 30;
console.log("the age is: " + age);
//boolean data type
var isStudent = true;
console.log("is student: " + isStudent);
//array data type
var fruits = ["apple", "banana", "orange"];
console.log("the fruits are: " + fruits);
console.log("the first fruit is: " + fruits[0]);
console.log("the second fruit is: " + fruits[1]);
console.log("the third fruit is: " + fruits[2]);
console.log("the number of fruits is: " + fruits.length);
//object data type
var person = {
    name: "John Doe",
    age: 30,
    isStudent: true
};
console.log("the person is: " + person.name);
console.log("the person's age is: " + person.age);
console.log("the person is a student: " + person.isStudent);
//function data type
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Alice");
//undefined
var x;
console.log("the value of x is: " + x);
//null
var y = null;
console.log("the value of y is: " + y);
y = "now y has a value";
console.log("the value of y is: " + y);
//symbol
var sym1 = Symbol("foo");
var sym2 = Symbol("foo");
console.log("sym1 === sym2: " + (sym1 === sym2)); // false  
//bigint
var bigIntNum = 1234567890123456789012345678901234567890n;
console.log("the value of bigIntNum is: " + bigIntNum);
//undefined
var z;
console.log("the value of z is: " + z);
