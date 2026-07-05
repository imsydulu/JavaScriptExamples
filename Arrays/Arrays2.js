let arr = [10, 20, 30, 40, 50];

arr.push(60);//add element at the end
arr.unshift(70);//add element at the beginning
console.log("after adding the elements: " + arr);
arr.pop(); //delete last element
arr.shift(); //delete first element
console.log("after deleting the elements: " + arr);
arr.splice(5, 0, 80, 90); //adds elements at index 5 without removing any elements
removed = arr.splice(6, 1); //removes 1 element starting from index 6
arr.splice(2, 0, 60); //adds 1 element at index 2 without removing any elements
console.log(arr);
console.log("Removed element: " + removed);

console.log("Index of 30: " + arr.indexOf(30));
console.log("last index of 30: " + arr.lastIndexOf(30));
console.log("includes 30 ?: " + arr.includes(30));
