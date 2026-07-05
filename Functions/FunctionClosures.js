function greeting(message) {
    return function (name) {
        console.log(message + " " + name);
    };
}

const sayHello = greeting("Hello");
sayHello("Kalyani"); // Output: Hello Kalyani
sayHello("Sydulu"); // Output: Hello Sydulu
sayHello("Sidhu"); // Output: Hello Sidhu
sayHello("Agastya"); // Output: Hello Agastya


function bankAccount() {
    let balance = 15000;

    return {
        deposit: function (amount) {
            balance += amount;
            return balance;
        },
        withdraw: function (amount) {
            balance -= amount;
            return balance;
        },
        getBalance: function () {
            return balance;
        }
    };
}
bank = bankAccount();
console.log("Initial balance: " + bank.getBalance());
console.log("After depositing 5000: " + bank.deposit(5000));
console.log("After withdrawing 2000: " + bank.withdraw(2000));
console.log("Final balance: " + bank.getBalance());


for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log("Value of i: " + i);
    }, 1000);
}
