let arr = [[[50, 60], [70, 80]], [[90, 100], [110, 120]], [[130, 140], [150, 160]]];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        for (let k = 0; k < arr[i][j].length; k++) {
            console.log(arr[i][j][k]);
        }
    }
}

let arr = [[10, 20,30], [30, 40,50], [50, 60,70]];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}



let arr = [1, 2, 3, 4, 5];
console.log("Original Array: " + arr);

arr.push(6);
let arrCopy = arr.slice();
let deepArr = structuredClone(arr);
arr.pop();//removes last element
arr.push(7);//adds element at the end
console.log("Copied Array: " + arrCopy);
console.log("Deep Copied Array: " + deepArr);
console.log(arr);
