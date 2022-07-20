let cotizacionDolar = prompt("Ingrese cotización del dólar oficial")
document.write("Cotización del dólar oficial: " + "$" + cotizacionDolar)

class producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    impuestoPais() {
        this.precio = this.precio * 0.30
    }

    impuestoGanancias() {
        this.precio = this.precio * 0.45
    }

}
const productos = [];
productos.push(new producto(prompt("Ingrese producto"), prompt("Ingrese precio en dólares")));
productos.push(new producto(prompt("Ingrese producto"), prompt("Ingrese precio en dólares")));
productos.push(new producto(prompt("Ingrese producto"), prompt("Ingrese precio en dólares")));
productos.push(new producto(prompt("Ingrese producto"), prompt("Ingrese precio en dólares")));
for (const producto of productos) {
    let div = document.createElement("div");
    div.innerHTML = `<h3>${producto.nombre}</h3>
                     <p>${producto.precio}</p>
                     <hr>`;
    document.body.appendChild(div);
}

