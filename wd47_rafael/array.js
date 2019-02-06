console.log('=== Array ===');

var carros = [];
var bidimencional = new Array(5).fill(new Array(3))
/*
var cars = new Array();
console.log(carros, carros.constructor)
console.log(cars, cars.constructor)

console.dir(Array.prototype);
*/
carros.push('Gol');
carros.push('Fox');
carros.unshift('Celta');
carros.unshift('Palio');

carros.splice(2,0,'Livina');
carros.splice(1,1,'Uno');
carros.splice(4,1);

/*
carros.forEach(function(){
    console.log(arguments);
})
*/