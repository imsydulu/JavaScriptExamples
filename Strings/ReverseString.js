let name = "javaScript";
let reversedName = name.split("").reverse().join("");
console.log(`the reversed name is: ${reversedName}`);
let reversedName2 = "";
for (let i = name.length - 1; i >= 0; i--) {
    reversedName2 += name[i];
}
console.log(`the reversed name is: ${reversedName2}`);
console.log(`the reversed name is: ${name.split("").reverse().join("")}`);


let value = "Hello World!";
let reversedValue = value.split("").reverse();
console.log(`the reversed value is: ${reversedValue.join("")}`);

let splitValue = value.split(" ");
let reversed = splitValue.reverse();
console.log(reversed);
console.log(reversed.join(" "));