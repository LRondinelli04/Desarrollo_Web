const mensaje = document.querySelector("#mensaje");

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
];

console.table(marcas);

// Ordeno el arreglo
marcas.sort();
console.table(marcas);

// Imprime en pantalla 
mensaje.innerText = marcas[2]; 
