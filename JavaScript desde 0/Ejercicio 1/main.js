const costosFijos = prompt("Ingrese el valor de los costos fijos");
const precioDeVenta = prompt("Ingrese el Precio de venta");
const costosVariables = prompt("Ingrese los costos de variables");

let puntoDeEquilibrio = costosFijos / (precioDeVenta - costosVariables);

alert("El Punto de Equilibrio indicado es de: " + puntoDeEquilibrio);
