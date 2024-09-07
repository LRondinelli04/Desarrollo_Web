console.warn( document.querySelector('title').innerText )

// -------------------------------------------------------
console.log('\n/* CALLBACKS */')

// -----------------------------------------------------
// Ejemplo 1:

var uno = () => {
    console.log('Soy la función 1')
}

var dos = () => {
    console.log('Soy la función 2')
}

uno()
dos()

function prueba(item, callback) {
    console.log(item, callback)

    // comprobación del callback (no estricta)
    //if(callback) callback()

    // comprobación del callback (estricta)
    if(typeof callback == 'function') callback()
}

prueba(1, uno)
prueba(2, dos)
prueba(3, 'Pepe')


// -----------------------------------------------------
// Ejemplo 2:

const suma = (a,b) => a + b
const resta = (a,b) => a - b
const mult = (a,b) => a * b
const div = (a,b) => a / b
const mod = (a,b) => a % b

function operacion(a,b,cb) {
    return cb(a,b)
}

let n1 = 15, n2 = 6

console.log(`La suma de ${n1} y ${n2} da ${operacion(n1,n2,suma)}`)
console.log(`La resta de ${n1} y ${n2} da ${operacion(n1,n2,resta)}`)
console.log(`La multiplicación de ${n1} y ${n2} da ${operacion(n1,n2,mult)}`)
console.log(`La división de ${n1} y ${n2} da ${operacion(n1,n2,div)}`)

console.log(`El módulo entre ${n1} y ${n2} da ${operacion(n1,n2,mod)}`)
console.log(`El módulo entre ${n1} y ${n2} da ${operacion(n1,n2,(x,y) => x % y)}`)
console.log(`El módulo entre ${n1} y ${n2} da ${operacion(n1,n2,function(x,y){ return x % y })}`)


// -----------------------------------
console.log('\n/* EVENTOS */')

var btn = document.getElementById('btn')
console.log(btn)

/* function click() {
    console.log('Click Me!')
} */

//const click = () => console.log('Click Me!')
//const click = function() { console.log('Click Me!') }

//btn.onclick = click
//btn.onclick = function() { console.log('Click Me!') }
//btn.onclick = () => console.log('Click Me!')

//btn.onclick = uno
// if(typeof btn.onclick == 'function') btn.onclick()


// ---------------------------------------------------
console.log('\n/* EVENTOS con múltiples callbacks */')

//btn.onclick = uno
//btn.onclick = dos

// Solución 1
/* btn.onclick = () => {
    uno()
    dos()
} */

// Solución 2
btn.addEventListener('click', uno)
btn.addEventListener('click', dos)
btn.addEventListener('click', function() {
    console.log('Soy otra función')
})
btn.addEventListener('click', () => {
    console.log('Soy otra función 2')
})

// ------ con setTimeout remuevo la función dos del listener después de 3 segundos ------
/* console.warn('Inicio:', new Date().toLocaleString())
setTimeout(() => {
    console.log('pasaron 3 segundos...')    
    btn.removeEventListener('click', dos)
    console.warn('Fin:', new Date().toLocaleString())
},3000) */

// --------------------------------------------------
console.log('\n/* EVENT Object (e) (event) (evt) */')

btn.addEventListener('click', function(e) {
    console.log(e)
})

btn.addEventListener('click', e => {
    console.log(e)
})

function procesarEventoClick(e) {
    console.log(e)
}

const procesarEventoClick2 = e => console.log(e)

//btn.addEventListener('click', e => procesarEventoClick(e))
btn.addEventListener('click', procesarEventoClick)
btn.addEventListener('click', procesarEventoClick2)


// ---------------------------------------------------------
console.log('\n/* EVENTOS con comportamiento automático */')

const link = document.querySelector('#link')
link.addEventListener('click', function(e) {
    e.preventDefault()

    console.log('Click en Link')

    console.warn('Inicio:', new Date().toLocaleString())
    setTimeout(() => {
        console.warn('Fin:', new Date().toLocaleString())
        window.location.href = 'https://www.google.com'
    },2000)    
})


// -------------------------------------------------------------------
console.log('\n/* Propagación de EVENTOS (bubbling y capturing) */')

var UNO = document.getElementById('uno')
var DOS = document.getElementById('dos')
var TRES = document.getElementById('tres')

TRES.addEventListener('click', function(e) {
    e.stopPropagation()
    console.log('Click en TRES')
}, false)   // tercer parámetro: dirección de propagación -> nada ó false: bubbling , true: capturing


DOS.addEventListener('click', function(e) {
    e.stopPropagation()
    console.log('Click en DOS')
}, false)   // tercer parámetro: dirección de propagación -> nada ó false: bubbling , true: capturing


UNO.addEventListener('click', function(e) {
    e.stopPropagation()
    console.log('Click en UNO')
}, false)   // tercer parámetro: dirección de propagación -> nada ó false: bubbling , true: capturing


/* document.addEventListener('click', function() {
    console.log('Click en document')
}, false) */


// -------------------------------------------------------------------
console.log('\n/* Aplicación avanzada de propagación de eventos */')

var botonCreado = false

var estatico = document.getElementById('estatico')
estatico.addEventListener('click', function() {
    console.log('Click en estático')

    if(!botonCreado) {
        var dinamico = document.createElement('button')
        dinamico.innerText = 'Dinámico'
        dinamico.id = 'dinamico'
        document.body.appendChild(dinamico)

        botonCreado = true
    }
})



























