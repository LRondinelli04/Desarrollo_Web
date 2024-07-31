// Hacer un programa que cargue lenguajes de programacion hasta que el usuario no quiera subir mas a un array vacio

let lenguajes = [];

function cargarLenguajes() {
  let respuesta = confirm("¿Deseas cargar lenguajes de programación?");
  // Quiero saber si el usuario quiere cargar algun lenguaje de progrmacion
  while (respuesta == true) {
    let lenguaje = prompt("Ingrese un lenguaje de promgracion");
    // Pregunto si escribio algo
    if (lenguaje != "") {
      // Cargo el lenguaje en el array
      lenguajes.push(lenguaje);
    } else {
      alert("No ingreso un lenguaje de programacion");
    }
    respuesta = confirm("¿Deseas cargar lenguajes de programación?");
  }
}

cargarLenguajes();

// Ordeno el array
lenguajes.sort();

// Imprimo el array en consola
console.table(lenguajes);
