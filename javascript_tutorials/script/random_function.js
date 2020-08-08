// A proper random function
// but min(included) and max(not included)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}

// here min and max (both included)
function RndInteger2(min, max) {
    return Math.floor(Math.random() * (max-min + 1)) + min;
}