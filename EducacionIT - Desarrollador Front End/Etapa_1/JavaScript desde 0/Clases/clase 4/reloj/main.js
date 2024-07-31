// Ubicamos elementos dentro del DOM
const mensaje = document.querySelector("#mensaje");

// Declaramos funciones de control
function reloj() {
  // Creamos un objeto de fecha
  const fecha = new Date();
  console.log("fecha: ", fecha);

  // Obtenemos el numero correspondiente a las horas
  let horas = fecha.getHours();
  /* console.log("horas: ", horas); */
  if (horas < 10) {
    horas = "0" + horas;
  }

  // Obtenemos el numero correspondiente a los minutos
  let minutos = fecha.getMinutes();
  /* console.log("minutos: ", minutos); */
  if (minutos < 10) {
    minutos = "0" + minutos;
  }

  // Obtenemos el numero correspondiente a los segundos
  let segundos = fecha.getSeconds();
  if (segundos < 10) {
    segundos = "0" + segundos;
  }
  /* console.log("segundos: ", segundos); */

  // Imprimimos el reloj en el span
  mensaje.innerText = horas + ":" + minutos + ":" + segundos;
}

// Invocamos a la funcion reloj()
reloj();

// Funcion para actualizar el llamado a la funcion
setInterval(reloj, 1000);
