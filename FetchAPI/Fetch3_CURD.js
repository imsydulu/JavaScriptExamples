const resp = await fetch("http://catfact.ninja/fact", { method: "GET" });
const jsonResp = await resp.json();
console.log(jsonResp);



const resp = await fetch("https://api.restful-api.dev/objects", { method: "GET" });
const jsonResp = await resp.json();

console.log(jsonResp);


//post operations

let reqBody = {
    "name": "Apple MacBook Pro 16",
    "data": {
        "year": 2019,
        "price": 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
    }
};
async function testAPiReq() {
    const resp = await fetch("https://api.restful-api.dev/objects",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(reqBody)

        });
    console.log(resp);

    const jsonResp = await resp.json();
    console.log(jsonResp);

}
testAPiReq();

