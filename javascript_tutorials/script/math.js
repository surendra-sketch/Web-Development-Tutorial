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