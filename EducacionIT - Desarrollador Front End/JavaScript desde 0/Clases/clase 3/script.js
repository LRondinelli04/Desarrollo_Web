const caja = document.getElementById("caja");


// Declaramos funciones de control

function pintarRojo() {
  caja.style.backgroundColor = "#ff0000";
  caja.style.rotate = "360deg";
  caja.style.border = "3px solid #000000";
  caja.innerText = "ROJO";
  caja.style.textAlign = "center";
  caja.style.transition = "5000ms";
}

function pintarAzul() {
  caja.style.backgroundColor = "#0000ff";
  caja.style.rotate = "720deg";
  caja.style.border = "3px solid #000000";
  caja.innerText = "AZUL";
  caja.style.textAlign = "center";
  caja.style.transition = "5000ms";
}

function pintarVerde() {
  caja.style.backgroundColor = "#00ff00";
  caja.style.rotate = "360deg";
  caja.style.border = "3px solid #000000";
  caja.innerText = "VERDE";
  caja.style.textAlign = "center";
  caja.style.transition = "5000ms";
}

function reset() {
  caja.style = "none";
  caja.innerText = "";
}
