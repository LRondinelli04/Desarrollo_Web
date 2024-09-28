"use strict";

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
var urlBase = "https://pokeapi.co/api/v2/pokemon";
var formOne = document.getElementById("formOne");
var inputOne = document.getElementById("pokemonId1");
var botonAll = document.getElementById("all");
var texto = document.getElementById("info");
formOne.addEventListener("submit", function _callee(e) {
  var pokemon;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          e.preventDefault();
          _context.next = 3;
          return regeneratorRuntime.awrap(getOnePokemon(inputOne.value));

        case 3:
          pokemon = _context.sent;
          texto.innerHTML = "\n        <h2>".concat(pokemon.name, "</h2>\n        <img src=\"").concat(pokemon.sprites.front_default, "\" alt=\"").concat(pokemon.name, "\">\n        <p>Altura: ").concat(pokemon.height, "</p>\n        <p>Peso: ").concat(pokemon.weight, "</p>\n    ");

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
botonAll.addEventListener("click", function _callee2(e) {
  var pokemons;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          e.preventDefault();
          _context2.next = 3;
          return regeneratorRuntime.awrap(getAllPokemons());

        case 3:
          pokemons = _context2.sent;
          texto.innerHTML = "";
          pokemons.forEach(function (pokemon) {
            var pokemonElement = document.createElement("div");
            pokemonElement.classList.add("pokemon-card");
            pokemonElement.innerHTML = "\n        <h2>".concat(pokemon.name, "</h2>\n        \n        <a href=\"").concat(pokemon.url, "\" target=\"_blank\">Ver detalles</a>\n    ");
            texto.appendChild(pokemonElement);
          });

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
});

var getAllPokemons = function getAllPokemons() {
  var response, data;
  return regeneratorRuntime.async(function getAllPokemons$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"));

        case 3:
          response = _context3.sent;

          if (response.ok) {
            _context3.next = 6;
            break;
          }

          throw new Error("Network response was not ok");

        case 6:
          _context3.next = 8;
          return regeneratorRuntime.awrap(response.json());

        case 8:
          data = _context3.sent;
          return _context3.abrupt("return", data.results);

        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](0);
          console.error("There has been a problem with your fetch operation:", _context3.t0);

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 12]]);
};

var getOnePokemon = function getOnePokemon(id) {
  var response, data;
  return regeneratorRuntime.async(function getOnePokemon$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(fetch("".concat(urlBase, "/").concat(id)));

        case 3:
          response = _context4.sent;

          if (response.ok) {
            _context4.next = 7;
            break;
          }

          texto.innerHTML = "error en el busqueda del pokemon con id: ".concat(id);
          throw new Error("Network response was not ok");

        case 7:
          _context4.next = 9;
          return regeneratorRuntime.awrap(response.json());

        case 9:
          data = _context4.sent;
          return _context4.abrupt("return", data);

        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](0);
          console.error("There has been a problem with your fetch operation:", _context4.t0);

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 13]]);
};