

///////////////////// CREAMOS LOS OBJETOS/////////////////////
var compu = {
    marca: "dell",
    precio: 250000

}

var heladera = {
    marca: "whirpool",
    precio: 350000
}

var lavarropa = {
    marca: "LG",
    precio: 550000

}

///////////////////////LOS PUSHEAMOS EN UNA ARRAY//////////////////////////////

let arrayDeObjetos = [] ////////este se declara como array
arrayDeObjetos.push(compu) //////// pusheamos
arrayDeObjetos.push(heladera)
arrayDeObjetos.push(lavarropa)
console.log(arrayDeObjetos);



/////////////////////////// DECLARAMOS UNA VARIABLE DONDE IRA EL PAGO TOTAL////////////


var precioTotal = 0

///////////////////////// METODO 1//////////////

for (let i = 0; i < arrayDeObjetos.length; i++) {
    precioTotal += arrayDeObjetos[i].precio;

}

console.log(precioTotal);



//////////METODO 2///////////////////

var precioTotal = arrayDeObjetos.reduce(function (previuosValue, currentValue) { return previuosValue + currentValue.precio }, 0) /////// esto con reducer. Basicamente previuosValue toma el valor incial, en este caso 0(que es ta marcado al final)
/////// y va sumando el currentValue.precio que es precio: 250000. 
//////////Luego toma 250000 y le 350000. A la suma de estos, los guarda en previuosValue y le suma 550000. Y asi, sucecivamente si tenemos mas objetos en el array.

console.log(precioTotal);