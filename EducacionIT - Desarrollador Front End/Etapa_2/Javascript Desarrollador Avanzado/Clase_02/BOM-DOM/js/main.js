console.log('Bienvenidos al curso de Javascript Avanzado')
console.warn('Bienvenidos al curso de Javascript Avanzado')
console.error('Bienvenidos al curso de Javascript Avanzado')


/* ----------------------------------------------------------- */
/*  Nuevos constructores de variables en ES6 (ECMAScript2015)  */
/* ----------------------------------------------------------- */

console.log('\n/* JS5 - var */')

/* var numero = 5
var numero = 6
console.log(numero)

var PI = 3.1415926
PI = 2.7
console.log(PI)

for(var i=0; i<5; i++) {
    console.log(i)
}
console.log(i) */

// ------------------------------------------------
console.log('\n/* ES6 - let / const */')

let numero = 5
numero = 6
console.log(numero)
 
const PI = 3.1415926
//PI = 2.7
console.log(PI)

for(let i=0; i<5; i++) {
    console.log(i)
}
//console.log(i)

// --------------------------------------------------------------------------------------
console.log('\n/* Funcionamiento de var / let y const en distintos bloques de código */')

// --------------------------
// Bloque de código anómimo
{
    //var a = 5
    //let a = 5
    const a = 5
    //a = 55
    console.log(a)
}
//console.log(a)

// ----------------------------
// Bloque de código condicional
if(true) {
    //var b = 6
    //let b = 6
    const b = 6
    console.log(b)
}
//console.log(b)

// ----------------------------
// Bloque de código funcional
function foo() {
    //var c = 7
    //let c = 7
    const c = 7
    console.log(c)
}

foo()
//console.log(c)


/* ----------------------------------------------------------- */
/*  Nuevos constructores de funciones en ES6 (ECMAScript2015)  */
/* ----------------------------------------------------------- */

console.log('\n/* JS5 - funciones */')

/* 
//function sumar(a,b) {
//    return a + b
}

var sumar = function(a,b) {
    return a + b
}

//sumar = 'Pepe'

var n1 = 5, n2 = 6

// concatenación de strings (JS5)
console.log('La suma de ' + n1 + ' más ' + n2 + ' es ' + sumar(n1,n2)) 
*/

// --------------------------------------------------------------------------------
console.log('\n/* ES6 - arrow function ó funciones flecha ó expresiones lambda */')

const sumar = (a,b) => a + b
const dobleDe = a => 2 * a
//const prtSaludo = () => console.log('Hola!')
const prtSaludo = _ => console.log('Hola!')
const getAleatorio1al10 = () => {
    var random = Math.random()          // 0 .. 0.9999999999999^
    random *= 10                        // 0 .. 9.999999999999^
    random = parseInt(random)           // 0 .. 9
    //random++                          // 1 .. 10
    return ++random                     // 1 .. 10
}
const getPersona = () => ({ nombre: 'Juan', edad: 23 })

//sumar = 'Pepe'

let n1 = 5, n2 = 6

// template strings (ES6) `` backtics
console.log(`La suma de ${n1} más ${n2} es ${sumar(n1,n2)}`)
console.log(`El doble de ${n1} es ${dobleDe(n1)}`)
prtSaludo()

for(let i=0; i<10; i++) console.log( getAleatorio1al10() )

console.log( getPersona() )


// -------------------------------------------------------------------------------------
console.log('\n/* Copia ó pasaje de valores para los distintos tipos de datos en JS */')

// --------------------------------------------------------------------------------------
console.warn('1. datos del tipo PRIMITIVO (number, string, boolean) - copia x valor')

//-----------------------------
console.log('--> a. Variables')

var nombre = 'Ana'
console.log(nombre, typeof nombre)
var nombreCopia = nombre
nombre = 'Juan'

console.log(nombre)
console.log(nombreCopia)

//-----------------------------
console.log('--> b. Funciones')

var fecha = '03/08/2024'
var agregarHora = function(f) {
    f = f + ' 12:38'
    console.log(f)
}

console.log(fecha)
agregarHora(fecha)
console.log(fecha)



// --------------------------------------------------------------------------------------
console.warn('2. datos del tipo OBJECT (array, objetos, funciones) - copia x referencia')

console.log('--> a. Variables')

var nombre = ['Ana']
console.log(nombre, typeof nombre)
var nombreCopia = nombre
nombre[0] = 'Juan'

console.log(nombre)
console.log(nombreCopia)


//-----------------------------
console.log('--> b. Funciones')

var fecha = ['03/08/2024']
var agregarHora = function(f) {
    f[0] = f[0] + ' 12:38'
    console.log(f)
}

console.log(fecha)
agregarHora(fecha)
console.log(fecha)


/* -------------------------------------------- */
/*    BOM : Browser Object Model -> window      */
/*    DOM : Document Object Model -> document   */
/* -------------------------------------------- */

// Acceso al BOM
console.log( window.innerWidth )
console.log( innerHeight )

console.log( outerWidth )
console.log( outerHeight )

// Acceso al DOM
console.log( window.document.getElementById('titulo') )
console.log( document.getElementsByTagName('h1') )
console.log( document.getElementsByClassName('titulo') )

// Acceso al DOM (métodos más modernos)
console.log( document.querySelector('#titulo') )

console.log( document.querySelector('h1') )
console.log( document.querySelectorAll('h1') )

console.log( document.querySelector('.titulo') )
console.log( document.querySelectorAll('.titulo') )


/* ------------------------------------------ */
/*      Manipulación de elementos del DOM     */
/* ------------------------------------------ */
var titulo = document.getElementById('titulo')
titulo.innerText += ' - como están!'
titulo.style.color = 'blueviolet'


/* ------------------------------------------ */
/*           Acceso avanzado al DOM           */
/* ------------------------------------------ */
var p = document.createElement('p')
p.innerText = 'Lorem ipsum...'

var body = document.getElementsByTagName('body')[0]
console.log(body)
body.appendChild(p)

var a = document.createElement('a')
a.innerText = 'Ir a Google'
a.href = 'https://www.google.com'
//body.appendChild(a)
p.appendChild(a)