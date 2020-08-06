let current_time = new Date();
document.querySelector("#current-time").textContent = current_time

var d = new Date(2001, 7, 12, 8, 30, 12, 4);
document.querySelector("code#newDateSpecified").textContent = d;

var d = new Date("October 13, 2014 11:13:00");
document.querySelector("code#newDateString").textContent = d;


let present = new Date();
// getFullYear() method
let yr = present.getFullYear();
console.log(`The year is : ${yr}`);
// getMonth() method
let mth = present.getMonth();
console.log(`The month is : ${mth}`);
//getDate() method
let dt = present.getDate();
console.log(`The date is : ${dt}`);
// getHourse() method
let hrs = present.getHours();
console.log(`The Hours is : ${hrs}`);
// getMinuts() method
let min = present.getMinutes();
console.log(`The Minutes is : ${min}`);
// getSeconds() method
let scnd = present.getSeconds();
console.log(`The seconds is : ${scnd}`);
// getMilliseconds() method
let mscnd = present.getMilliseconds();
console.log(`The Milli Seconds is : ${mscnd}`); 

// Now i am set dates
// setDate() method
present.setDate(9);
console.log(present);

// currennt time stamp in milliseconds from returning date of new Date(0) i.e Jan 1, 1970
let dateNow  = Date.now();
console.log(`Now Date in Milliseconds: ${dateNow}`);

