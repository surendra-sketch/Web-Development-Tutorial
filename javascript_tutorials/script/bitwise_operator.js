// JavaScriot Bitwise Operators

// Operator     Name            Description
// &            AND             Sets each bit to 1 if both bits are 1
// |            OR              Sets each bit to 1 if one of two bits is 1
// ^            XOR             Sets each bit to 1 if only one of two bits is 1
// ~            NOT             Inverts all the bits
// <<           Zero fill       Shifts left by pushing zeros in from the right and let the leftmost bits fall of
//              left shift
// >>           Signed right    Shifts right by pushing copies of the leftmost bit in from the left,
//              shift           and let the rightmost bits fall off.       
// >>>          Zero fill       Shift right by pushing zeros in form the left, and let the
//              right shift     rightmost bits fall off.

// // Bitwise AND &
// // When a bitwise AND is performed on a pair of bits, it returns 1 if both bits are 1.
// console.log(0&0); // returns 0 and 4 bits are: 0000
// console.log(0&1); // returns 0 and 4 bits are: 0001
// console.log(1&0); // returns 0 and 4 bits are: 0010
// console.log(1&1); // returns 1 and 4 bits are: 0100

// // 4 bits example: 
// console.log(1111&0000); // returns  0000 ie. 0
// console.log(1111&0001); // returns  0001 ie. 1
// console.log(1111&0010); // returns  0010 ie. 2
// console.log(1111&0100); // returns  0100 ie. 4

// // Bitwise OR |
// // When a bitwise OR is performed on a pair of bits, it returns 1 if one of the bits are 1: 
// console.log(0|0); // returns 0 
// console.log(0|1); // returns 1
// console.log(1|0); // returns 1
// console.log(1|1); // returns 1

// // Bitwise XOR ^
// // When a bitwise XOR is performed on a pair of bits, it returns 1 if the bits are different
// console.log(0^0); // returns 0 
// console.log(0^1); // returns 1
// console.log(1^0); // returns 1
// console.log(1^1); // returns 0

// // Bitwise NOT ~
// // Inverts all the bits
// console.log(~5); // returns -6

// JavaScript (Zero Fill) Bitwise Left Shift (<<)
// This is a zero fill left shift. One or more zero bits are pushed in from the right,
// and the leftmost bits fall off: 
// 5 = 0000000000000101 
// console.log(5<<3); // returns 40 = 0000000000101000

// // JavaScript (Sign Preserving) Bitwise Right Shift (>>)
// // This is a sign preserving right shift. Copies of the leftmost bit are pushed in from the left,
// // and the rightmost bits fall off: 
// // -6 = 1111111111111010
// console.log(-6>>2); // returns = 1111111111111110

// // JavaScript (Zero Fill) Right Shift (>>>)
// // This is a zero fill rigth shift. One or more zero bits are pushed in from the left,
// // and the rightmost bits fall off: 
// console.log(5>>>1); // returns 2

// // Converting Decimal to Binary
// function dec2bin(dec) {
//     return (dec>>>0).toString(2);
// }
// console.log(dec2bin(5));

// Converting Binary to Decimal
function bin2dec(bin) {
    return Number(parseInt(bin,2).toString(10));
}
console.log(bin2dec(100));