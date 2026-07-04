let arr = [1, 2, 3, 4, 5];

arr.map((value, index) => {
    console.log(value + " at index " + index);
});

let newArr = arr.map((value) => {
    //console.log(value*2);
    return value * 2;
});

console.log("New Array: " + newArr);

let arr2 = [1, 4, 9, 16, 25];
function squareRoot(value) {
    return Math.sqrt(value);
}

let result = arr2.map(squareRoot);
console.log("original: " + arr2);
console.log("Result: " + result);

let result2 = arr2.map(value => Math.sqrt(value));
console.log("Result2: " + result2);