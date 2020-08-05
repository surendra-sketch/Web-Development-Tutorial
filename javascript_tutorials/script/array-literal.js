// // This technique for creating an array is known as an array literal
// var colors = ['white', 'black', 'custom'];

// var elemenColor= document.getElementById('colors');
// elemenColor.textContent = colors[0];


// This technique for creating array is called an array constructor. 
// This uses the new keyword followed by Array();
// The values are then specified in parentheses(not square brackets).
var colors = new Array(
    'white',
    'black',
    'custom');

var el = document.getElementById('colors');
el.textContent= colors[0];