let promise = new Promise((resolve)=>{
    console.log('Promise is created');
    resolve('Promise is resolved');
});

console.log(promise);

let promise2 = new Promise((reject)=>{
    console.log('Promise is created');
    reject('Promise is rejected');
});

console.log(promise2);

let promise3 = new Promise((resolve, reject)=>{
    console.log('Promise is created');
    let error = true;
    if (error) {
        reject('Promise is rejected');
    } else {
        resolve('Promise is resolved');
    }
});

console.log(promise3);
promise3.then((message)=>{ //then is called when promise is resolved
    console.log('Inside then: ' + message);
}).catch((message)=>{ //catch is called when promise is rejected
    console.log('Inside catch: ' + message);
});   