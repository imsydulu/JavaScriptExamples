let name = "javaScript";
let length = name.length;
console.log("the length of the string is: " + length);
let upperCase = name.toUpperCase();
console.log("the string in uppercase is: " + upperCase);
let lowerCase = name.toLowerCase();
console.log("the string in lowercase is: " + lowerCase);

let char = name.charAt(4);
console.log("the first character of the string is: " + char);
let index = name.indexOf("S");
console.log("the index of the first occurrence of 'S' is: " + index);

let substring = name.substring(0, 4);
console.log("the substring from index 0 to 4 is: " + substring);
let slice = name.slice(0, 4);
console.log("the slice from index 0 to 4 is: " + slice);

let replaced = name.replace("java", "Java");
console.log("the string after replacing 'java' with 'Java' is: " + replaced);

let split = name.split("a");
console.log("the string after splitting by 'a' is: " + split);

var nameTemplate = `${name}`;
console.log(nameTemplate);
console.log(`the length of the name template is: ${nameTemplate.length}`);
let nameTick = "the name is: ${name}";
console.log(nameTick);