let user_name = "Kalyani";
//let user_role = "Admin";

function checkAccess(user_role){
    let hasAccess = false;
    if(user_role === "Admin"){
        hasAccess = true;
        let welcomeMessage = `Welcome, ${user_name}! You have full access.`;
        console.log(welcomeMessage);
       // return hasAccess;
    }
    console.log("has user access?: " + hasAccess);
}
//console.log(welcomeMessage); // This will throw an error because 'welcomeMessage' is not defined in this scope

checkAccess("Admin");