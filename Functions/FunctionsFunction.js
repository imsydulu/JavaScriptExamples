function callAnotherFun(otherfun){
    otherfun(100,200);
}

function anotherFun(a,b){
    console.log("the sum of a and b is: " + (a+b));
}

callAnotherFun(anotherFun);