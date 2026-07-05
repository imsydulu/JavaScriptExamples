let promise = new Promise((resolve, reject) => {
    console.log("inside promises");
    let flag = true;
    if (flag) {
        resolve("resolve : success");
    } else {
        reject("reject : failure");
    }
});

console.log(promise);

promise.then((message) => {
    console.log(message+" :fullfilled")
}).catch((err) => {
    console.log(err);
});