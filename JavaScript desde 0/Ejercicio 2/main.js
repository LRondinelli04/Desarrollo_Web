const ingresoTotal = prompt("Ingrese el monto total");

let gastosNecesarios = (ingresoTotal * 50) / 100;
let gastosOpcionales = (ingresoTotal * 30) / 100;
let ahorroEInversion = (ingresoTotal * 20) / 100;

alert(
  "El monto a dedicar de cada categoria es, Gastos Necesarios: " +
    gastosNecesarios +
    ", Gastos Opcionales: " +
    gastosOpcionales +
    ", Ahorro e Inversion: " +
    ahorroEInversion
);
