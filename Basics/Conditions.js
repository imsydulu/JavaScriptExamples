var flag = "true";
var i = 0
if (i > 0) {
    flag = "false";
} else if (i < 0) {
    flag = "false";
    //console.log(flag);
} else {
    console.log("the value of i is: " + i);
    flag = "true";
}

switch (flag) {
    case "true":
        console.log("the value of flag is: " + flag);
        break;
    case "false":
        console.log("the value of flag is: " + flag);
        break;
    default:
        console.log("the value of flag is: " + flag);
}


let browser = "firefox";
switch (browser) {
    case "chrome":
        console.log(`the browser : ${browser} is opened`);
        break;
    case "firefox":
        console.log(`the browser : ${browser} is opened`);
        break;
    case "safari":
        console.log(`the browser : ${browser} is opened`);
        break;
    default:
        console.log(`the browser : ${browser} is opened`);
        break;
}


