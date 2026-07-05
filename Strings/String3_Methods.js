let name = "John Doe";
console.log("Length of the string: " + name.length);
console.log("Character at index 0: " + name.charAt(0));
console.log("Character at index 4: " + name.charAt(4));
console.log("Character at index 8: " + name.charAt(8));

let name = "    John Doe    ";
console.log("Original String: '" + name + "'");
console.log("Trimmed String: '" + name.trim() + "'");

let name = "John Doe";
console.log("Uppercase: " + name.toUpperCase());
console.log("Lowercase: " + name.toLowerCase());

let name = "John Doe";
console.log("Index of 'Doe': " + name.indexOf("Doe"));
let name = "John Doe";
console.log("Last index of 'o': " + name.lastIndexOf("o"));

let name = "John Doe";
console.log("Substring from index 0 to 4: " + name.substring(0, 4));    
console.log("Substring from index 5 to end: " + name.substring(5));
console.log("Substring from index 0 to 4 using slice: " + name.slice(0, 4));
console.log("Substring from index 5 to end using slice: " + name.slice(5));