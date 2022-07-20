// Calculadora que devuelve el total de pesos a pagar por gastos realizados en dólares con los impuestos incluidos //

function gastos(valorDolar, gastoDolar) {
    return totalPesos = ((valorDolar * gastoDolar))
}
let gastoPesos = gastos(parseFloat(prompt("Ingrese cotización del dólar oficial"))
    , parseFloat(prompt("Ingrese sus gastos en dólares")))
document.write("Gasto en pesos es: " + gastoPesos)

let impuestoPais = gastoPesos * 0.30
document.write("<br>" + "<br>" + "Impuesto PAIS del 30%: " + "$" + impuestoPais)

let retencion = gastoPesos * 0.45
document.write("<br>" + "<br>" + "Retención a cuenta de Ganancias del 45%: " + "$" + retencion)

let totalPagar = gastoPesos + impuestoPais + retencion
document.write("<br>" + "<br>" + "Total a pagar en pesos: " + totalPagar)

