////// CALCULO DEL DOLAR //////

const DOLAROFICIALBNA = 143.75;
const DOLARMAYORISTA = 129.71
const IMPUESTOPAISSINIVA = 0.08;
const IVA = 0.21;
const IMPUESTOPAIS = 0.3;
let percepcionDeGanancias = 0.45;
let percepcionDeGananciasCompra = 0.35
const SELLOSCABA = 0.015;
const INGRESOSBRUTOSCABA = 0.02;
let precioGoogle = 1.38;
let precioHBO = 249.5;

let lugar = "CABA"

let calculoDolar = (cantidad, precioOficial, impuesto, percepcion, lugar, sellos, impuestosLocales) => {
    const PRECIODOLAR = cantidad * precioOficial;
    let pagoTotal = PRECIODOLAR + (PRECIODOLAR * impuesto) + (PRECIODOLAR * percepcion);
    if (lugar === "CABA") {
        pagoTotal = pagoTotal + (PRECIODOLAR * sellos) + (PRECIODOLAR * impuestosLocales)
    } else {
        pagoTotal
    }
    return pagoTotal
}

function opcionesDolar() {
    do {
        valor = Number(prompt("que operacion queres hacer?\n 3. compra dolar ahorro \n 2.pagar suscripcion a HBO \n 1. pagar subscripcion Google \n 0. Salir"))
        switch (valor) {
            case 3:
                cantidadDolares = Number(prompt("cuantos divisas queres comprar?"))
                return calculoDolar(cantidadDolares, DOLAROFICIALBNA, IMPUESTOPAIS, percepcionDeGananciasCompra)

            case 2:
                return calculoDolar(precioHBO, 1, IMPUESTOPAIS, percepcionDeGanancias)

            case 1:
                return calculoDolar(precioGoogle, DOLARMAYORISTA, IMPUESTOPAISSINIVA, percepcionDeGanancias, lugar, SELLOSCABA, INGRESOSBRUTOSCABA)
            case 0:
                console.log("gracias por usar nuestros servicios");
                return 0
            default:
                console.log("seleccione una opcion");
                break
        }

    } while (valor !== 0 || valor === null)
}
const PAGOJULIO = opcionesDolar()
console.log("su pago es " + PAGOJULIO);




