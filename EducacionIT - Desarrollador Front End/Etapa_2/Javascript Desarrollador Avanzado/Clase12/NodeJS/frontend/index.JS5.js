'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sumar = function sumar(a, b) {
  return a + b;
};

var Persona = function () {
  function Persona(nombre) {
    _classCallCheck(this, Persona);

    this.nombre = nombre;
  }

  _createClass(Persona, [{
    key: 'getNombre',
    value: function getNombre() {
      return this.nombre;
    }
  }]);

  return Persona;
}();

var n1 = 20,
    n2 = 25;

console.log('La suma de ' + n1 + ' m\xE1s ' + n2 + ' es ' + sumar(n1, n2));

var persona1 = new Persona('Juan');
var persona2 = new Persona('Ana');

console.log(persona1.getNombre());
console.log(persona2.getNombre());
