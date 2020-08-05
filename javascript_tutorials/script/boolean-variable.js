var inStock, shipping;
inStock = true;
shipping = false;
var elementStock = document.getElementById('stock');
var elementShip = document.getElementById('shipping');


if(inStock) {
    elementStock.innerHTML= "Yes";
} else {
    elementStock.innerHTML= "No";
}

if(shipping) {
    elementShip.innerHTML = "Yes";
} else {
    elementShip.innerHTML = "No";
}