function outSideFun() {

    function insideFun() {
        console.log("I am inside function");
    }
    console.log("I am outside function");
    // insideFun();
    return insideFun;
}
examp = outSideFun();
examp();


function outSideFun1() {
    let count = 0;
    console.log("outside function");
    return function insideFun1() {
        count++;
        console.log("From inside function: " + count);
    };
    console.log("outside function");//after return nothing will execute.
}

outSideFun1()();// outSideFun1()(); 
// This will not work as expected because a new instance of insideFun1 is created each time outSideFun1 is called, resetting count to 0.
example = outSideFun1();
example();
example();
example();