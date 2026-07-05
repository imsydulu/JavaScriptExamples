let ages = [20,18,30,17,25,40,15];

let adults = ages.filter(age => {
    return age > 18 ? true : false;
});
console.log("Adults: " + adults);

let reduce = adults.reduce((sum, currentValue) => sum + currentValue, 0);
console.log("Sum of ages: " + reduce);
