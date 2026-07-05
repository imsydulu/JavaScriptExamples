let arr = ["Sydulu", 593, "Kalyani", true, undefined, null, NaN];

for (let i = 0; i < arr.length; i++) {
   // console.log(arr[i]);
}

for (const val of arr) {
    //console.log(val);
}


arr.push("Sidhu");//add element at the end
arr.unshift("Agastya");//add element at the beginning
//arr.shift(); //delete first element
//arr.pop(); //delete last element
let slice=arr.slice(5, 8); 
//returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
console.log(slice);

arr.splice(5, 3); //removes 3 elements starting from index 5

arr.splice(2, 0, "Sydulu", "Kalyani"); //adds elements at index 2 without removing any elements 

console.log(arr);
arr.forEach(element => {
    //console.log(element);
});

