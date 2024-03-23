// Constantes fijas de un casa
const costoDeBase = 1.16;

// Variables
let fm;
let tipoVivienda = prompt(
  "Selecciona la vivienda a cotizar: \n" +
    "('Casa', 'P.H.', 'Dto. Edificio', 'Barrio Privado', 'Oficina', 'Local comercial', 'Depósito logística')"
);
let m2 = prompt("Ingrese los metros cuadrados de su vivienda");

// Resultado
switch (tipoVivienda) {
  case "Casa":
    fm = 1.009;
    break;
  case "P.H":
    fm = 1.005;
    break;
  case "Dto. Edificio":
    fm = 1.002;
    break;
  case "Barrio Privado":
    fm = 1.019;
    break;
  case "Oficina":
    fm = 1.039;
    break;
  case "Local comercial":
    fm = 1.041;
    break;
  case "Depósito logística":
    fm = 1.092;
    break;
}

// Validamos si el valor de fm es superior a 1.000 y si los metros cuadrado ingresados en un prompt se pueden convertir a un valor entero
if (fm > 1.0 && Number.parseInt(m2)) {
  let calculo = costoDeBase * m2 * fm;
  console.log("El resultado del calculo es: $" + calculo);
} else {
  console.warn("Hubo un error en los datos ingresados");
}
