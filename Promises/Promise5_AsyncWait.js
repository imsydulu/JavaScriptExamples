function fun() {
    console.log("func exe is started......");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("set timeout");
            //resolve("resolve:");
            reject("rejected:");
        }, 2000);
    });
}

// fun().then((result) => {
//     console.log(`${result}  executed`);

// }).catch((err) => {
//     console.log(`${err}:failed`);

// });

async function runfunc() {
    try {
        await fun();
        console.log("promise full filled!!!!!!!");
    }catch(error){
        console.log(`${error} : rejected!!!!!! `);
        
    }
    
    
}

runfunc();