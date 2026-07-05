let s1 = "Java";
let s2 = "Script";
let s3 = s1 + s2;
console.log("Concatenated String: " + s3);
let s4 = "JavaScript";
console.log("Comparison: " + (s3 == s4));

s1 += "Script";
console.log("Concatenated String using +=: " + s1);
console.log("Comparison after concatenation: " + (s1 == s4));

s5 = s4.concat(" is awesome!");
console.log("Concatenated String using concat(): " + s5 );

let s6 = "Java".concat("Script", " is awesome!");
console.log("Concatenated String using concat(): " + s6);

//immutable nature of strings
let s7 = "JavaScript";
s7[0] = "j";
console.log("Attempt to change first character: " + s7);    


