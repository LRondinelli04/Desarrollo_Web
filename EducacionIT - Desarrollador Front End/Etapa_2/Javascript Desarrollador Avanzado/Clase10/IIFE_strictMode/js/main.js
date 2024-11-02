'use strict'

console.log(`
/* -------------------------------------------------------------------------- */    
/*          Modo estricto del compilador / interprete de JS                   */
/*      'use strict' al tope de las funciones ó de los scripts JS             */
/* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Strict_mode */
/* -------------------------------------------------------------------------- */    
`)

let a = 5
console.log(a)


console.log(`
/* ------------------------------------- */    
/*  FUNCIONES AUTOINVOCADAS - IIFE (ify) */
/* ------------------------------------- */
// I: INMEDIATLY
// I: INVOKED
// F: FUNCTION
// E: EXPRESSION
/* ------------------------------------- */
`)

;(function(num) {
    'use strict'
    let clave = 'qwerty1234'
    console.log('IIFE ejecutada', clave, num)
})(33)


