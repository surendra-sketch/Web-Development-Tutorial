// Window setTimeout() method 
// The setTimeout() method calls a function or evaluates an expression
// after a specified number of milliseconds.

function greeter(name) {
    greetMsg = "Hello " + name + ", Good Morning!!!";
    console.log(greetMsg);
}

// console.log(setTimeout(greeter, 5000, "Ashu"));

// clearTimeout(2);

// // Window setInterval() method
// let setIntervalId = setInterval(greeter, 1000, "Ashu");
// setTimeout(clearTimeout, 20000, setIntervalId); 

// Code for making clock
function displayTime() {
    let time = new Date();
    document.getElementById("timeNow").innerHTML = time;
}
setInterval(displayTime, 1000);
