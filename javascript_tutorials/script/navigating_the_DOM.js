// Manupulating DOM 


// Grab element from DOM using getElementById()
let main = document.getElementById('main').innerHTML;
console.log(main);

// Grab element from DOM using getElementByClasName()
let containers = document.getElementsByClassName("container");
console.log(containers);

// Grab element using querSelector() (same as css selector)
let getLists = document.querySelectorAll("#main>ul>li");
console.log(getLists); 