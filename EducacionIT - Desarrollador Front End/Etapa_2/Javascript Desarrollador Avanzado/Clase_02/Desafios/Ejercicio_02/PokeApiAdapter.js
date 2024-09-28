/*
    Contexto:
    - PokeApi es una API para obtener información
    sobre Pokemons. Además de ser divertida, es
    realmente compleja, con muchísimos recursos y
    relaciones. Es una excelente opción para
    practicar llamadas AJAX.
    Continuaremos con la idea de separar lo más
    posible las partes del proyecto y crearemos un
    Adaptador. Es una pieza de código encargada
    de comunicarse con algo externo (en este caso,
    PokeApi). Por ejemplo, puede ser un archivo con
    varias funciones.

    - Consigna:
    Una vez lograda esa función base, se pueden
    desarrollar diferentes accesos o interfaces. En
    otras palabras, desarrollar funciones que faciliten
    usos específicos de esa función.
        ● Desarrolla las funciones getAllPokemons y
        getOnePokemon para obtener un listado de
        todos los pokemons, y el detalle de uno solo,
        respectivamente.

*/

const urlBase = "https://pokeapi.co/api/v2/pokemon";

const formOne = document.getElementById("formOne");
const inputOne = document.getElementById("pokemonId1");

const botonAll = document.getElementById("all");
const texto = document.getElementById("info");

formOne.addEventListener("submit", async (e) => {
  e.preventDefault();
  const pokemon = await getOnePokemon(inputOne.value);
  texto.innerHTML = `
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p>Altura: ${pokemon.height}</p>
        <p>Peso: ${pokemon.weight}</p>
    `;
});

botonAll.addEventListener("click", async (e) => {
  e.preventDefault();
  const pokemons = await getAllPokemons();
  texto.innerHTML = "";
  pokemons.forEach((pokemon) => {
    const pokemonElement = document.createElement("div");
    pokemonElement.classList.add("pokemon-card");
    pokemonElement.innerHTML = `
        <h2>${pokemon.name}</h2>
        
        <a href="${pokemon.url}" target="_blank">Ver detalles</a>
    `;
    texto.appendChild(pokemonElement);
  });
});

const getAllPokemons = async () => {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.results; // Retornar la lista de Pokémon
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
};

const getOnePokemon = async (id) => {
  try {
    const response = await fetch(`${urlBase}/${id}`);
    if (!response.ok) {
      texto.innerHTML = `error en el busqueda del pokemon con id: ${id}`;
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
};
