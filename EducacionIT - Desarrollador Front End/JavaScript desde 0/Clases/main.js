/* - Solicitamos al usuario que ingrese su nombre
   - Almacenamos ese dato en memoria 
*/

const nombre = "Lucas Rondinelli";
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

const mensaje = document.querySelector("#mensaje");

let text = "ArGenTINA";
if (text.toLowerCase() === "argentina") {
  /* mensaje.innerText = "Se escribio la palabra Argentina"; */
  mensaje.innerHTML =
    '<img src = "/EducacionIT - Desarrollador Front End/img/deporte1.png">';
} else {
  mensaje.innerText = "No se escribio la palabra Argenitna";
}

// Creamos objeto fecha

const texto = document.querySelector("#texto");

const fecha = new Date();
console.log(fecha);
// Esto te permite obtener datos especificos de 'fecha'
console.log(fecha.getFullYear());

// Obtenemos el numero del dia del mes
let diaMes = fecha.getDate();
console.log("dia de mes: ", diaMes);
if (diaMes <= 9) {
  diaMes = "0" + diaMes;
}

// Obtenemos el numero del mes actual
let mes = fecha.getMonth() + 1;
console.log("mes actual: ", mes);
if (mes <= 9) {
  mes = "0" + mes;
}
// Obtenemos el numero del año actual
let anio = fecha.getFullYear();
console.log("año actual: ", anio);

/* switch (mes) {
  case 1:
    mes = "enero";
    break;
  case 3:
    mes = "marzo";
    break;
  default:
    mes = "mes no detectado";
    break;
} */

texto.innerText = diaMes + "/" + mes + "/" + anio;
