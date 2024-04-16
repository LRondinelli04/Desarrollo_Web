// Ubicamos elementos dentro del DOM
/* Se usa querySelectorAll() cuando tengo que seleccionar mas de un elemento
y se usa querySelector cuando es un unico elemento */
const botones = document.querySelectorAll("#rotador img");
const span = document.querySelector("#rotador span");

// Botones
const anterior = botones[0];
const siguiente = botones[1];

// Array (arreglo)
const marcas = [
  "Hermès",
  "Zara",
  "Boss",
  "Aeropostale",
  "Tommy",
  "Hollister",
  "Gola",
  "Kingpin",
  "Old Navy",
  "Nike"
];

// Cuento la cantidad de marcas que hay
const largo = marcas.length;

// Estado inicial
let posicion = 4;
span.innerText = marcas[posicion];

// Funciones de los botones
anterior.addEventListener("click", () => {
  posicion--;
  if (posicion < 0) {
    posicion = largo - 1;
  }
  span.innerText = marcas[posicion];
});

siguiente.addEventListener("click", () => {
  posicion++;
  if (posicion > (largo - 1)) {
    posicion = 0;
  }
  span.innerText = marcas[posicion];
});
