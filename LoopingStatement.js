for (let i = 0; i < 5; i++) {
    console.log(`the value of i is: ${i}`);
}

let evencount = 0;
let oddcount = 0;
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        console.log(`the value of i is: ${i} and it is even`);
        evencount++;
    } else {
        console.log(`the value of i is: ${i} and it is odd`);
        oddcount++;
    }
}
console.log(`the number of even numbers is: ${evencount}`);
console.log(`the number of odd numbers is: ${oddcount}`);   