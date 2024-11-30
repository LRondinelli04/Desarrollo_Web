'use strict';

console.log("\n/* -------------------------------------------------------------------------- */    \n/*          Modo estricto del compilador / interprete de JS                   */\n/*      'use strict' al tope de las funciones \xF3 de los scripts JS             */\n/* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Strict_mode */\n/* -------------------------------------------------------------------------- */    \n");
var a = 5;
console.log(a);
console.log("\n/* ------------------------------------- */    \n/*  FUNCIONES AUTOINVOCADAS - IIFE (ify) */\n/* ------------------------------------- */\n// I: INMEDIATLY\n// I: INVOKED\n// F: FUNCTION\n// E: EXPRESSION\n/* ------------------------------------- */\n");

(function (num) {
  'use strict';

  var clave = 'qwerty1234';
  console.log('IIFE ejecutada', clave, num);
})(33);