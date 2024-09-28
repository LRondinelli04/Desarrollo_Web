// Consigna
/*
    Diseñar una función llamada CampoRequerido.
    Esta función debe recibir un elemento del DOM y
    retornar el mismo elemento. Solo se debe agregar
    un listener al ‘blur’ para que, cuando éste se
    dispare, modifique la propiedad isValid de ese
    elemento.
*/

function CampoRequerido(elemento) {
  // Agregar el listener al evento blur
  elemento.addEventListener("blur", () => {
    // Modificar la propiedad isValid del elemento
    elemento.isValid = elemento.value.length !== 0; // si el elemento no esta vacio retorna true, sino false
  });

  // Retornar el mismo elemento
  return elemento;
}
