let s1 = "JavaScript";
let s2 = "JavaScript";

console.log(s1 == s2);
let s3 = new String("JavaScript");
console.log(s1 == s3);
console.log(s1 === s3);
console.log(typeof s1);
console.log(typeof s3);
console.log(typeof s2);

let s4 = `JavaScript`;//template literal
console.log(s4);
console.log(s3 == s4);
console.log(" compare s1 with s4: " + (s1 == s4));