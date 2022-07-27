// Calculadora que devuelve el total de pesos a pagar por gastos realizados en dólares con los impuestos incluidos //

function gastos(valorDolar, gastoDolar) {
    return totalPesos = ((valorDolar * gastoDolar))

}

let gastoPesos = gastos(parseFloat(prompt("Ingrese cotización del dólar oficial"))
    , parseFloat(prompt("Ingrese sus gastos en dólares")))
// document.write("Gasto en $: " + gastoPesos)

let impuestoPais = gastoPesos * 0.30
// document.write("<br>" + "<br>" + "Impuesto PAIS del 30%: " + "$" + impuestoPais)

let retencion = gastoPesos * 0.45
// document.write("<br>" + "<br>" + "Retención a cuenta de Ganancias del 45%: " + "$" + retencion)

let totalPagar = gastoPesos + impuestoPais + retencion
// document.write("<br>" + "<br>" + "Total a pagar: " + " $" + totalPagar)


const cambiarColor = () => {
    document.querySelector('h1').style.color = 'red'
}

const volverColor = () => {
    document.querySelector('h1').style.color = 'black'
}

let div = document.createElement("div");
div.innerHTML = `<h3>Gasto en $: ${gastoPesos}
<h3>Impuesto PAIS del 30%: $${impuestoPais}
<h3>Retención a cuenta de Ganancias del 45%: $${retencion}
`
document.body.appendChild(div);

let btn = document.querySelector('button')

btn.addEventListener('click', function () {
    alert("Total a pagar:" + " $" + totalPagar)
})

// /<h2>Total a pagar: $${totalPagar}</h2>