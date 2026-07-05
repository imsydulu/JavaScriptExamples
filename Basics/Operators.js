var a = 10;
var b = 20;
var c = a + b;
console.log("the sum of a and b is: " + c);
console.log("the multiplication of a and b is: " + (a * b));
console.log("the division of a and b is: " + (a / b));
console.log("the remainder of a and b is: " + (a % b));
console.log("the value of a is: " + a);
console.log("the value of b is: " + b);
console.log("the value of c is: " + c);

// comparison operators
console.log("is a equal to b? " + (a == b));
console.log("is a not equal to b? " + (a != b));
// logical operators
console.log("is a greater than b and a less than c? " + (a > b && a < c));
console.log("is a greater than b or a less than c? " + (a > b || a < c));
console.log("is a not equal to b? " + !(a == b));
// assignment operators
var d = 5;
d += 10; //d= d + 10
console.log("the value of d is: " + d);
d -= 5; //d= d - 5
console.log("the value of d is: " + d);
d *= 2; //d= d * 2
console.log("the value of d is: " + d);
d /= 3; //d= d / 3
console.log("the value of d is: " + d);
d %= 4; //d= d % 4
console.log("the value of d is: " + d);
// ternary operator
var e = (a > b) ? "a is greater than b" : "a is not greater than b";
console.log(e);
// bitwise operators
var f = 5;
console.log("the value of f is: " + f);
f &= 3; //f= f & 3
console.log("the value of f is: " + f);
f |= 2; //f= f | 2
console.log("the value of f is: " + f);
f ^= 1; //f= f ^ 1
console.log("the value of f is: " + f);
f <<= 1; //f= f << 1
console.log("the value of f is: " + f);
f >>= 1; //f= f >> 1
console.log("the value of f is: " + f);
f >>>= 1; //f= f >>> 1
console.log("the value of f is: " + f);

// type checking
console.log("the type of a is: " + (typeof a));
console.log("the type of b is: " + (typeof b));
// type conversion
var g = "10";
console.log("the value of g is: " + g);
console.log("the type of g is: " + (typeof g));
var h = Number(g);
console.log("the value of h is: " + h);
console.log("the type of h is: " + (typeof h));

//
var name = "John Doe";
console.log("the value of name is: " + name);
console.log("the type of name is: " + (typeof name));
var nameInt = Number(name);
console.log("the value of nameInt is: " + nameInt);
console.log("the type of nameInt is: " + (typeof nameInt));