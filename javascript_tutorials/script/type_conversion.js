let a = typeof "John", b = typeof 3.14, c = typeof NaN, d = typeof false, e = typeof [1,2,3,4], f = typeof { name: "Ashu", age: 19}, g = typeof new Date(), h =  typeof function() {}, i = typeof null;
document.getElementById("typeof_output").innerHTML = `Type of "John" : ${a} <br> 
                                                Type of 3.14 : ${b} <br>
                                                Type of NaN : ${c} <br>
                                                Type of false : ${d} <br>
                                                Type of [1,2,3,4] : ${e} <br>
                                                Type of { name: "Ashu", age: 19} : ${f} <br>
                                                Type of new Date() : ${g} <br>
                                                Type of function() {} : ${h} <br>
                                                Type of  null : ${i} <br>`;

let return_string = "John".constructor;                                            
document.getElementById("constructor_fn_output").innerHTML = `<strong>Output: </strong>${return_string}`;


let randomArray = ["Ashu", "Bhavishya", "Nirmal", "Laptop"];
let rndObj = {
    name: "Ashu"
}
function checkArray(myArray) {
    return (myArray.constructor.toString().indexOf("Array") > -1);
}
document.getElementById("checkArray_output").innerHTML = checkArray(randomArray);

let fruits = ["Banana", "Orange", "Apple", "Mango"];
function checkArray2(myArray2) {
    return myArray2.constructor === Array;
}
document.getElementById("checkArray2_output").innerHTML = checkArray2(fruits);

// Converting Numbers to String
// The global method String() can convert numbers to Strings
console.log(String(123));
console.log(String(110+200));

// by toString() method do the same thing
console.log((123).toString());
console.log((100 + 23).toString());

// _____Converting Booleans to Strings_____
// The global method String() can convert booleans to strings.
console.log(String(false));
console.log(String(true));

// by using toString() does the same thing
console.log(false.toString());
console.log(true.toString());

// _____Converting Dates to Strings______
// The gobal method String() can convert dates to strings.
console.log(String(Date()));

// by using toString does the same thing
console.log(Date().toString());


// ______Converting String to Numbers______
// The global method Number() can convert string to numbers.
// Strings containing numbers (like "3.14") convert to numbers (like 3.14).
// Empty strings convert to 0.
// Anything else converts to NaN (Not a Number).
console.log(Number("3.14"));
console.log(Number(" "));
console.log(Number(""));
console.log(Number("99 88 "));
console.log(Number(null));

// _____The Unary + Operator_____
// The unary + operator can be used to convert a variable to a number: 
var y = "5";
var x = + y;
console.log(x);
console.log(y);

// if the variable cannot be converted, it will still become a number, but with the value NaN(Not a Number):
var st = "John";
var nb = + st; 
console.log(nb);  // Output: NaN


// ____Converting Booleans to Numbers_____
// The global method Number() can also convert booleans to number
console.log(Number(false)); // returns 0
console.log(Number(true)); // returns 1


// _____Converting Dates to Numbers____
// The global method Number() can be used to convert dates to numbers.
let date_to_use = new Date();
console.log(Number(date_to_use)); // returns 1596892005917
// the date method getTime() does the same.
console.log(date_to_use.getTime()); // returns 1596892005917

// ____ Automatic Type Conversion ____
// When JavaScript tries to operate on a "wrong" date typeof, it will try to convert the value to "right type".
console.log(5+null); // returns 5 because null is converted to 0
console.log("5" + null); // returns "5null" because null is converted to "null"
console.log("5" + 2); // returns "52" because 2 is converted to "2".
console.log("5" - 2); // returns 3 because "5" is converted to 5.
console.log("5" * "2")   // returns 10  because "5" and "2" are converted to 5 and 2

// ____ Automatic String Conversion ___
// JavaScript automatically calls the variable's  toString() function when you try to "output"
// an object or a variable:

