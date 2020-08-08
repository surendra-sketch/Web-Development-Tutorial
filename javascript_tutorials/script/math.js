// JavaScript Math Object

// The JavaScript Math object allows you to perform mathematical tasks on numbers.

// Math.round() 
// Math.round(x) returns the value of x rouded to its nearest ineger: 
Math.round(2.4); // returns 2
Math.round(3.5); // returns 4

// Math.pow()
// Math.pow(x, y) returns the value of x to the power of y: 
Math.pow(5, 3); // retruns 125

// Math.sqrt() 
// Math.sqrt(x) returns the square root of x: 
Math.sqrt(64); // returns 8
Math.sqrt(169); // retruns 13

// Math.abs()
// Math.abx(x) returns the absolute (positive) value of x: 
Math.abs(-3.4); // returns 3.4


// Math.ceil() 
// Math.ceil(x) returns the value of x rounded up to its nearest integer: 
Math.ceil(4.4); // returns 5

// Math.floor() 
// Math.floor(x) returns the value of x rounded down to its nearest integer: 
Math.floor(4.5) // returns 4

// Math.sin() 
// Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).Math
// If you want to use degrees instead of radians, you have to convert degrees to radians: 
// Angle in radians = Angle in degress * PI/180
Math.sin(90*Math.PI/180);

// Math.cos()
// Math.cos(x) returns the cosine (a value betewen -1 and 1) of the angle x (given in radians).
Math.cos(0*Math.PI/180);

// Math.min() and Math.max()
// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments: 
Math.min(0, 1324, 343, 34334, 34343, 4341, -1); // returns -1
Math.min(0, 1324, 343, 34334, 34343, 4341, -1); // returns 34343

// Math.random()
// Math.random() returns a random number between 0 (inclusive), and 1(exclusive)
Math.random(); // retruns a random number


// E: 2.718281828459045
// LN2: 0.6931471805599453
// LN10: 2.302585092994046
// LOG2E: 1.4426950408889634
// LOG10E: 0.4342944819032518
// PI: 3.141592653589793
// SQRT1_2: 0.7071067811865476
// SQRT2: 1.4142135623730951

console.log("Value of E =", Math.E); // value of euler's number
console.log("Value of LN2 =", Math.LN2) // Natuaral log of 2
console.log("Value of LN10 =", Math.LN10) // Natural logrithm of 10
console.log("Value of LOG2E =", Math.LOG2E) // The base-2 logarithm of e.
console.log("Value of LOG10E =", Math.LOG10E) //The base-10 logarithm of e.

// JavaScript cbrt() method
// it returns a cubic root of a given number.
console.log(Math.cbrt(512));

// JavaScript SQRT_2 Property
// returns the sqaure root of 2
console.log(Math.SQRT2);
// returns the square root of half(i.e 0.5)
console.log(Math.SQRT1_2);

// JavaScript trunc() method
// the trunc() method returns the integer parts of a number.
// NOTE: This method will NOT round the number up/down to the nearest integer, but simply remove the decimals.
console.log(Math.trunc(323.32323)); // returns 323

// JavaScript exp() Method
// the exp() method returns the value of E power x, were E is Euler's number (approximately 2.718)
// and x is the number passed to it.
console.log(Math.exp(3)); // returns 20.085536923187668
