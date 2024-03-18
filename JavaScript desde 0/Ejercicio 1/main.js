// constantes fijas
const costosFijos = prompt("Ingrese el valor de los costos fijos");
const precioDeVenta = prompt("Ingrese el Precio de venta");
const costosVariables = prompt("Ingrese los costos de variables");

// variables
let puntoDeEquilibrio = costosFijos / (precioDeVenta - costosVariables);

// alerta de la informacion
alert("El Punto de Equilibrio indicado es de: " + puntoDeEquilibrio);

/* Este metodo imprime en pantalla el resultado
document.write("El Punto de Equilibrio indicado es de: " + puntoDeEquilibrio); */
