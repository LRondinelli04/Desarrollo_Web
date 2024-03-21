/* 1. Cree una variable llamada text con un texto Lorem Ipsum de 5 palabras (puede generarlo desde aquí
(https://es.lipsum.com/#paras)).
2. Cree una función llamada contarCaracteres que reciba un string como parámetro e imprima en la
consola la cantidad de caracteres.
3. Agregue a la función creada anteriormente otro informe en consola con la posición en que comienza la
palabra "ipsum" si es que existe.
4. Imprima en la consola el substring desde la posición 1 a la 4 en mayúsculas.
5. Abra el archivo en el navegador y use las herramientas de desarrollo para ver el resultado.
 */

// Generar una variable "text" con texto lorem
let text = "Lorem ipsum dolor sit amet.";

// Crear funcion
function contarCaracteres(text) {
  // 2)
  let caracteres = 0;
  caracteres = text.length;
  console.log(
    "La cantidad de caracteres que tiene el texto es de: ",
    caracteres
  );
  // 3)
  let posicionIpsum = text.indexOf("ipsum");
  if (posicionIpsum !== -1) {
    console.log(
      'La palabra "ipsum" comienza en el caracter numero: ',
      posicionIpsum + 1
    );
  } else {
    console.log('La palabra "ipsum" no se encuentra en el texto');
  }
}

// 4)
function imprimir(text) {
  if (text.length >= 4) {
    console.log(text.substring(0, 4).toUpperCase()); //Imprime de la posicion 0 a 4 del texto
  } else {
    console.log(
      "El texto tiene menos de 4 caracteres, por lo tanto no alcanza a imprimir el mensaje"
    );
  }
}

// Llamo a la funcion
contarCaracteres(text);
imprimir(text);
