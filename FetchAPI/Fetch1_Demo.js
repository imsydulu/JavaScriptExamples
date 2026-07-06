fetch("http://catfact.ninja/fact")
    .then((result) => result.text())
    .then(txt => console.log(txt))
    .catch((err) => console.log("api failed"));

fetch("http://catfact.ninja/facts")
    .then((res) => res.text())
    .then(txt => {
        //console.log(txt);
        console.log(JSON.parse(txt));
        
    }).catch((err) => console.log("api failed"));

fetch("http://catfact.ninja/fact")
    .then((res) => res.json())
    .then(txt => console.log(txt))
    .catch((err) => console.log("api failed"));