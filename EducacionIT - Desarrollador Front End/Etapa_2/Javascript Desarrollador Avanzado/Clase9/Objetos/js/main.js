console.warn( document.querySelector('title').textContent )

/* ----------------------------------------------------------- */
/*       Objetos en Javascript: formas para construirlos       */
/* ----------------------------------------------------------- */
// 1) Forma literal {}
// 2) Forma constructor Object con operador new
// 3) Forma utilizando funciones constructoras con operador new
// 4) Forma utilizando clases de ES6 (class) con operador new
/* ----------------------------------------------------------- */

console.warn('/* 1) Forma literal {} */')

let a = { nombre: 'Juan'}
a.apellido = 'Perez'
a['edad'] = 23
console.log(a)

delete a.apellido
console.log(a)

console.log(a.hasOwnProperty('nombre'))
console.log(a.hasOwnProperty('apellido'))
console.log(a.hasOwnProperty('dni'))
console.log(a.hasOwnProperty('edad'))

// objeto sin prototipo
//let aSinProto = Object.create(Object.prototype) // con prototipo de Object
let aSinProto = Object.create(null) // sin prototipo de Object
aSinProto.nombre = 'María'
console.log(aSinProto)
/*
console.log(aSinProto.hasOwnProperty('nombre'))     // falla sin prototipo
console.log(aSinProto.hasOwnProperty('apellido'))   // falla sin prototipo
*/
// --------------------------------------------------------------------
console.warn('/* 2) Forma constructor Object con operador new */')


let b = new Object()
b.nombre = 'Ana'
console.log(b)

console.log(Object)
console.dir(Object)

console.log(b.hasOwnProperty('nombre'))
console.log(b.hasOwnProperty('apellido'))

// --------------------------------------------------------------------
console.warn('/* 3) Forma utilizando funciones constructoras con operador new */')

// ---------------- Análisis de una función en Javascript -----------------------
console.log('\n// a. Una función en JS es un objeto')

function foo() {
    console.log('Soy foo')
}

foo()

foo.x = true
console.log(foo.x)

console.log(foo)
console.dir(foo)

// -------------------------------------------------
console.log('\n// b. Una función en JS es variádica')

function suma(a=0,b=0) {    // valores de los argumentos por default
    console.log(a,b)
    console.log(arguments)
    return a + b
}

console.log( suma(5,6,7) )

console.dir(suma)


// ----------------------------------------------------------
console.log('\n// c. Una función en JS tiene ámbito ó scope')

var global = 'global'

function foo2(argumento2) {
    var local2 = 'local2'
    console.log(global, local2, argumento2/* , local3 *//* , argumento3 */)
}

function foo3(argumento3) {
    var local3 = 'local3'
    console.log(global, local3, argumento3/* , local2 *//* , argumento2 */)
}

foo2('argumento2')
foo3('argumento3')


// --------- ámbito ó scope global -------------
console.log(global)
//console.log(local2)
//console.log(local3)
//console.log(argumento2)
//console.log(argumento3)


// -------------------------------------------------------------------------
console.log('\n// d. Una función en JS tiene contexto de ejecución (this)')

// function -> this dinámico -> cambia según el contexto de ejecución
// arrow function -> this estático -> no cambia según el contexto de ejecución, depende del contexto de creación

function foo4() {
    console.log(this)
}

foo4()

var nombre = 'Ana'
const persona = {
    nombre: 'Juan',
    saludo: function(texto) {
        //console.log(this)
        console.log(texto + this.nombre)
    }
}

persona.saludo('Hola que tal, soy ')

const saludoGlobal = persona.saludo

console.error('/* Forma normal */')
saludoGlobal('Hola que tal, soy ')

console.error('/* Forma apply */')
saludoGlobal.apply(persona, ['Hola que tal, soy '])

console.error('/* Forma call */')
saludoGlobal.call(persona, 'Hola que tal, soy ')

console.error('/* Forma bind */')
saludoGlobal.bind(persona)('Hola que tal, soy ')


// -------------------------------------------------------------------------
console.log('\n// e. Una función en JS tiene closure (clausuras)')


function externa(x) {
    //console.log(x)
    let z = 5
    return function interna(y) {
        //return x
        return y+x+z
    }
}

let resultado = externa(50)
//console.log(x)
console.log(resultado)
console.dir(resultado)

console.log( resultado(10) )


function externa2(x) {
    return function() {
        return function() {
            return function() {
                return function() {
                    return function() {
                        console.log(x)
                    }
                }
            }
        }
    }
}

externa2(100)()()()()()


// -------------------------------------------------------------------------
console.log('\n// f. Una función en JS puede ejecutarse de 4 formas diferentes')

//var x = 11
this.x = 11
function ctx(a,b) {
    console.log(this.x, a, b, this)
}

console.dir(ctx)

ctx(5,6)                    // Forma normal de ejecución (contexto fijo)
ctx.apply({x:1},[5,6])      // Forma apply de ejecución (contexto variable)
ctx.call({x:1},5,6)         // Forma call de ejecución (contexto variable)
ctx.bind({x:1})(5,6)        // Forma bind de ejecución (contexto variable)


// ------------------------------------------------------------------------------------------
console.log('\n// g. Funcionamientos del this en una arrow function (this contextual): fijo')


function cliente() {
    console.log(this)

    this.edad = 32
    var that = this  // (parche en JS5)

    return {
        // solución 1 (parche)
        /* getEdad: function() {
            //console.log(this)
            //return this.edad
            return that.edad   // (parche en JS5)
        } */
        
        // solución 2
        /* getEdad: (function() {
            console.log(this)
            return this.edad
        }).bind(this) */

        // solución 3 (arrow function en ES6)
        getEdad: () => {
            console.log(this)
            return this.edad
        }
    }
}

const cl = cliente()
console.log(cl.getEdad())


// -----------------------------------------------------------
console.warn('/* POO, OOP: aplicación de las funciones constructoras */')

// ------------------------------
// Funciones constructoras en JS5
// ------------------------------
function AlumnoJS5(nombre, edad) {
    //console.log(this)

    // 1. propiedades instancia (pertenecen a cada objeto creado)
    this.nombre = nombre
    this.edad = edad

    AlumnoJS5.contador++
    //return this
}

// 2. propiedades prototipo (pertenecen a todos los objetos creados)
AlumnoJS5.prototype.estudiar = function() {
    console.log('estudiando...')
}

// 3. propiedades estáticas (pertenece a la función constructora y no a sus objetos)
AlumnoJS5.contador = 0


console.dir(AlumnoJS5)

console.log('Número de objetos: ' + AlumnoJS5.contador)

const alumno1JS5 = new AlumnoJS5('Ana',21)
console.log(alumno1JS5)
console.log('Número de objetos: ' + AlumnoJS5.contador)

const alumno2JS5 = new AlumnoJS5('Juan',23)
console.log(alumno2JS5)
console.log('Número de objetos: ' + AlumnoJS5.contador)


//console.log(alumno1JS5.nombre, alumno1JS5.edad)
//console.log(alumno2JS5.nombre, alumno2JS5.edad)

// ------------------------------------------------
//      Funcionamiento del new en Javascript
// ------------------------------------------------
// 1. crea un objeto literal vacío -> a = {}
// 2. ejecuta la función constructora que tiene
//    a su derecha cambiando el contexto de
//    ejecución al del objeto creado en el punto 1
//    -> AlumnoJS5.call(a, ... , ... )
// 3. retorno a su izquierda el objeto del punto 1
//    al cual se le añadieron propiedades por parte
//    de la función constructora
//    -> const alumno <- a
// ------------------------------------------------

AlumnoJS5()     // Se puede pero no se debe


// ------------------------------------------------------------------------------
console.warn('/* 4) Forma utilizando clases de ES6 (class) con operador new */')


// ---------------------------------
//          clases en ES6
// ---------------------------------
class AlumnoES6 {
    // 3. propiedades estáticas (pertenece a la función constructora y no a sus objetos)
    static contador = 0

    constructor(nombre, edad) {
        // 1. propiedades instancia (pertenecen a cada objeto creado)
        this.nombre = nombre
        this.edad = edad

        AlumnoES6.contador++
    }

    // 2. propiedades prototipo (pertenecen a todos los objetos creados)
    estudiar() {
        console.log('estudiando...')
    }
}

console.dir(AlumnoES6)

console.log('Número de objetos: ' + AlumnoES6.contador)

const alumno1ES6 = new AlumnoES6('Ana',21)
console.log(alumno1ES6)
console.log('Número de objetos: ' + AlumnoES6.contador)

const alumno2ES6 = new AlumnoES6('Juan',23)
console.log(alumno2ES6)
console.log('Número de objetos: ' + AlumnoES6.contador)


//AlumnoES6()     // No se puede (una clase no es una función)


console.warn('/* Herencia en ES6 */')

// ---------------------------------------
//           Herencia en ES6
// ---------------------------------------
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    saludo() {
        console.log('Hola que tal!')
    }
}

const persona1 = new Persona('Pedro',32)
const persona2 = new Persona('Ana',21)

console.log(persona1)
console.log(persona1.nombre)
console.log(persona1.edad)
persona1.saludo()

console.log(persona2)
console.log(persona2.nombre)
console.log(persona2.edad)
persona2.saludo()


// ------------------------------
class Empleado extends Persona {
    constructor(sueldo, nombre, edad) {
        super(nombre, edad)
        this.sueldo = sueldo
    }

    trabajar() {
        console.log('trabajando...')
    }
}

const empleado1 = new Empleado(300000, 'Pablo', 25)
console.log(empleado1)
console.log(empleado1.nombre)
console.log(empleado1.edad)
console.log(empleado1.sueldo)
empleado1.trabajar()
empleado1.saludo()

const empleado2 = new Empleado(450000, 'María',24)
console.log(empleado2)
console.log(empleado2.nombre)
console.log(empleado2.edad)
console.log(empleado2.sueldo)
empleado2.trabajar()
empleado2.saludo()
