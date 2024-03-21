/* 1. Cree 3 constantes (A, B, y C) con valores numéricos.
2. Cree una función operacionNumerica que realice la operación (A + B) ^ C y la imprima en consola.
3. Utilice Math.random() y Math.floor() para asignar valores dinámicos a A, B, y C.
4. Agregue a la función operacionNumerica la impresión en consola del número más grande de las 3
variables.
5. Abra el archivo en el navegador y use las herramientas de desarrollo para ver el resultado.
 */

// Constantes
const A = Math.floor(1.1);
const B = Math.floor(3.8);
const C = Math.random();

// Funcion
function operacionNumerica(a, b, c) {
  let resultado = (a + b) ** c;
  console.log("El resultado de es: ", resultado);
  let numeroMasGrande;
  calcularNumeroMasGrande(numeroMasGrande, a, b, c);
}

function calcularNumeroMasGrande(n, a, b, c) {
  if (a > b && a > c) {
    n = a;
  } else if (b > a && b > c) {
    n = b;
  } else {
    n = c;
  }
  console.log("El valor mas alto es: ", n);
}

// Ejecutar Funcion
operacionNumerica(A, B, C);
