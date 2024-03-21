/* - Solicitamos al usuario que ingrese su nombre
   - Almacenamos ese dato en memoria 
*/

const nombre = prompt("Ingrese su nombre de usuario");
// Si se cargo un nombre y no es un espacio vacio
if (nombre !== null && nombre !== "") {
  bienvenido.innerText = "Bienvenido " + nombre + "!";
  // si nombre es un espacio vacio o no se cargo un nombre
} else if (nombre === "" || nombre === null) {
  bienvenido.innerText = "Bienvenido!";
}

// Traducir los textos a los distintos idiomas
const espanol = "Informacion Adicional de las Clases en Vivo";
const ingles = "Additional Information on Live Classes";
const frances = "Informations supplémentaires sur les cours en direct";
// Asignamos contenido dentro del parrafo con el id informacion
titulo.innerText = espanol;
