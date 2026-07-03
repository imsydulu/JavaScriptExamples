let message = "Hello World! This is a message from JavaScript.";
console.log(message);
console.log("the split of the string is: " + message.split(" "));
console.log(`the split of the string is: ${message.split(" ")}`);
let words = message.split(" ");
for (let i = 0; i < words.length; i++) {
    console.log(`the word at index ${i} is: ${words[i]}`);
    console.log("the word at index " + i + " is: " + words[i]);
    console.log(words[i]);
}


let name = "javaScript";
sun = name.substring(-4);//accepts only positive values
myname = name.substring(0, 4);
console.log("the substring from index 4 is: " + myname);
console.log("the substring from index -4 is: " + sun);//does not work as expected, returns the whole string
console.log(`substring : ${name.substring(0, 4)}`);


let name  = "sydulu";
//console.log(`substring : ${name.substring(0, 4)}`);
//console.log(`slice : ${name.slice(0, -4)}`); 
console.log(`slice 2 : ${name.slice(-4)}`);
console.log(`slice 3 : ${name.slice(-6, -4)}`);


let a  = "10";
let b= "20";
let c = Number(a) + Number(b);
console.log(`the value of c is: ${c}`);