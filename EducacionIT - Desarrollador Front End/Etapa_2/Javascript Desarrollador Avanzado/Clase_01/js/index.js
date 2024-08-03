console.log("\n/* ES6 - let / const */");

let numero = 5;

numero = 6;
console.log(numero);

const PI = 3.1415926;
// PI = 2.2;
console.log(PI);

// Bloque de codigo repetitivo con condicion de salida
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// console.log(i)

/* ------------------------------------------------- */

console.log(
  "\n/* Funcionamiento de var / let y const en distintos bloques de codigo */"
);

//-------------------------------
// Bloque de codigo anonimo
{
  var a = 5;
  console.log(a);
}
console.log(a);

//-------------------------------
// Bloque de codigo condicional
if (true) {
  var b = 6;
  console.log(b);
}
console.log(b);
//-------------------------------
// Bloque de codigo funcional
function foo() {
  var c = 7;
  console.log(c);
}
foo();

/* ------------------------------------------------- */

console.log(
  "\n/* Copia o pasaje de valores para los distintos tipos de datos en JS */"
);

// ------------------------------------
console.warn(
  "1. datos del tipo PRIMITIVO (number, string, boolean) - copia x valor"
);

console.log("a. Variables");

var nombre = "Ana";
console.log(nombre, typeof nombre);
var nombreCopia = nombre;
nombre = "Juan";

console.log(nombre);
console.log(nombreCopia);

//-------------------------------

console.log("b. Funciones");
var fecha = "03/08/2024";

var agregarHora = function (f) {
  f = f + " 12:40";
  console.log(f);
};

console.log(fecha);
agregarHora(fecha);
console.log(fecha);

/* ------------------------------------------------- */

console.warn(
  "2. datos del tipo OBJECT (array, objetos, funciones) - copia x referencia"
);

console.log("a. Variables");

var nombre = ["Ana"];
console.log(nombre, typeof nombre);

var nombreCopia = nombre;
nombre[0] = "Juan";

console.log(nombre);
console.log(nombreCopia);

//-------------------------------

console.log("b. Funciones");
var fecha = ["03/08/2024"];

var agregarHora = function (f) {
  f[0] = f[0] + " 12:40";
  console.log(f);
};

console.log(fecha);
agregarHora(fecha);
console.log(fecha);

/* ------------------------------------------------ */
/*     BOM: Browser Object Model  --> Window        */
/*     DOM: Document Object Model --> Document      */
/* ------------------------------------------------ */

//* Acceso al BOM
console.log(window.innerWidth); //* Devuelve el ancho interno del navegador
console.log(window.innerHeight); //* Devuelve el alto interno del navegador

//* Acceso al DOM
let titulo = document.querySelector("#titulo");
console.log(titulo);

// console.log("\n/* BOM: Browser Object Model */");
