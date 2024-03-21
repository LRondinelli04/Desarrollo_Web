// Constantes
const ingresoTotal = prompt("Ingrese el monto total");

// Variables 
let gastosNecesarios = (ingresoTotal * 50) / 100;
let gastosOpcionales = (ingresoTotal * 30) / 100;
let ahorroEInversion = (ingresoTotal * 20) / 100;

// Muestra de informacion
alert(
  "El monto a dedicar de cada categoria es, Gastos Necesarios: " +
    gastosNecesarios +
    ", Gastos Opcionales: " +
    gastosOpcionales +
    ", Ahorro e Inversion: " +
    ahorroEInversion
);
