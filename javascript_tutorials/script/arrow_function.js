console.log("Hello World!!!");

// Arrow Function
// let greet = () => {
//     console.log('Good Morning Again');
// }

// // we can write greet function with shortcut
// let greet = () => console.log('Good Morning Again');

// setTimeout(() => {
//     console.log('I am inside the setTimeout function.')
// }, 2000);


// shortcuts for arrow function

// let sum = (a, b) => {
//     return a+b ;
// }

// // we can write sum function as
// let sum = (a, b) => a+b;

// // if we want to half a number we can write
// let half = (a) => a/2; 

// // we can also the half function as
// let half =  a => a/2;


// understanding 'this' keyword
let obj = {
    greeting: "Main Party Leke Aa raha hu",
    names: ["Hulk", "Captain America", "Natasha", "Thor", "Iron Man", "Hawkey"],
    call() {
        console.log(this); // Here 'this' points to 'obj' object
    },
    t: console.log(this), // here 'this' points to 'window' object
    speakMsg() {
        this.names.forEach((superHero) => {
            console.log(this.greeting + " " + superHero);
            console.log(this);
        });
    }
}

