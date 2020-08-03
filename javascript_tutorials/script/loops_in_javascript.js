// // For loop
// document.querySelector("#print_1to5").addEventListener('click', function(event) {
//     for(let i=1;i<6;i++) {
//         console.log(i);
//     }
// });

// // array iteration using for loop
let superHero = ["Captain America", "Natasha", "Hulk", "Iron Man", "Spider Man"];
// for (let index = 0; index < superHero.length; index++) {
//     console.log("Hello " + superHero[index]);    
// }

// // forEach: Performs the specified action for each element in an array.
// superHero.forEach(function f(element) {
//     console.log("Hello " + element + " by forEach function.");
// });

// // for of loop
// for(element of superHero) {
//     console.log("Hello " + element + "by for of function.");
// }

// // Object iteration in JavaScript
let employee = {
    name: "Ashu",
    salary: 15000,
    laptop: "Dell Vostro 15"
};

// for(key in employee) {
//     console.log(`The ${key} of employee is ${employee[key]}`);
// }

// // while loop in js 
let index = 0;
// while(index<4) {
//     console.log(`${index} is less than 4`);
//     index++;
// }

// do-while loop
// this loop will run at least once whether condition is true or false
index=0;
do{
    console.log(`${index} is less than 4`);
    index++;
}while(index<4);
