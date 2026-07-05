function fun1() {
    return new Promise((resolve, reject) => {
        console.log("fun1 executer function");
        setTimeout(() => {
            resolve("fun1:reslove");
        }, 3000);
    });
}

// function started from here
function fun2() {
    return new Promise((resolve, reject) => {
        console.log("fun2 executer function");
        setTimeout(() => {
            resolve("fun2:reslove");
        }, 3000);
    });
}

//function 3 started
function fun3() {
    return new Promise((resolve, reject) => {
        console.log("fun3 executer function");
        setTimeout(() => {
            // resolve("fun3:reslove");
            reject("fun3: Rejected")
        }, 3000);
    });
}

//function 4
function fun4() {
    return new Promise((resolve, reject) => {
        console.log("fun4 executer function");
        setTimeout(() => {
            resolve("fun4:reslove");
        }, 3000);
    });
}
// fun1().then((result) => {
//     console.log(result);
// }).catch((err) => {

// });
// fun2().then((result) => {
//     console.log(result);
// }).catch((err) => {

// });
// fun3().then((result) => {
//     console.log(result);
// }).catch((err) => {

// });;
// fun4().then((result) => {
//     console.log(result);
// }).catch((err) => {

// });

// fun1().then(fun2).then(fun3).then(fun4).then(()=>{
//     console.log("all functions are acecuted!");
// }).catch((err) => {
//     console.log("err : promise Failed , chain broken!!!!");
// });

async function run() {
    try {
        await fun1();
        await fun2();
        await fun3();
        await fun4();
        console.log("Promise fulfilled!!!!!!!!!!!");
    } catch (errr) {
        console.log("failed!!!!!!!!!!" + errr);
    }
}
run();
