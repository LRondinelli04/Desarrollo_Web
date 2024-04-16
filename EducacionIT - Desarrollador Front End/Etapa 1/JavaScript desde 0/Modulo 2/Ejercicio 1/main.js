// Variables
let edad = prompt("Ingrese su edad");

// Verificar edad
if (edad !== null) {
  if (edad > 18) {
    console.log("Bienvenido!");
  } else {
    console.error("Debes ser mayor de 18 años para ingresar");
  }
}
