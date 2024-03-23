/* Ahora vamos a hacer un inicio de sesión, que
consta de tres pasos generales:
1. Solicitar las credenciales del usuario: el login empieza cuando solicitamos al usuario que se identifique. Estas credenciales deben validar que el usuario es quien dice ser, por tal motivo suelen incluir datos que deba conocer solo el usuario deseado (como una contraseña). 
2. Validación de las credenciales: en este paso deberíamos verificar si esas credenciales son correctas o válidas.
3. Tomar acción respecto a la validez o invalidez de las credenciales: puede ser un mensaje de error o de bienvenida.
---------------------------------------------------------------------------------------------------------------------
Consigna
Para este caso te proponemos solicitar un usuario y clave.

El usuario estará validado si es “admin” y su clave es “1234”.
---------------------------------------------------------------------------------------------------------------------*/
// Variables
let usuario = prompt("Ingrese su usuario");
let clave = prompt("Ingrese su clave");

// Validar usuario y clave
if (
  usuario !== null &&
  usuario !== "" &&
  usuario === "admin" &&
  clave !== null &&
  clave !== "" &&
  clave === "1234"
) {
  console.log("Bienvenid@ " + usuario);
} else {
  console.error("No se reconocen las credeciales ingresadas");
}
