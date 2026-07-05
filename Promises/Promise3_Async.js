const promise = new Promise((resolve, reject) => {
    console.log("water is started boiling------");
    setTimeout(() => {
        //console.log("water has boiled");
        console.log("water has not boiled");
        // resolve();
        reject();
    }, 3000);

});


promise.then(() => {
    console.log("fullfilled==========");
}).catch(() => {
    console.log("unfullfilled : rejected");
});