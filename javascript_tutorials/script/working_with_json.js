let jasonObject = {
    name: "Ashu Kumar",
    semester: "3rd",
    lapy: "Dell Vostro 15",
    mobile: "Moto e4"
}
console.log(jasonObject);

// converting jasonObject into string
let jsonStr = JSON.stringify(jasonObject);
console.log(jsonStr);

jsonStr = jsonStr.replace('Moto e4', 'HTC Desire 620');
console.log(jsonStr);

newJasonObj = JSON.parse(jsonStr);
console.log(newJasonObj);