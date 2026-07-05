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
