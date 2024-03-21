// Variables
let edad = prompt("Ingrese su edad");

// Verificar edad
if (edad !== null) {
  if (edad > 18) {
    console.log("El usuario es mayor de edad");
  } else {
    console.error("Debes ser mayor de 18 años para ingresar");
  }
}
