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


console.clear()

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

        // ---> solución anidando callbacks
        //var dinamico = document.getElementById('dinamico')
        //console.log(dinamico)
        /* dinamico.addEventListener('click', function() {
            console.log('Click en dinámico')
        }) */

        botonCreado = true
    }
})

// ---> solución utilizando propagación de eventos
document.addEventListener('click', function(e) {
    //console.log('document click!', e)

    var id = e.target.id
    if(id == 'dinamico') {
        console.log('Click en dinámico')
    }
})


// -------------------------------------------------------------------
console.log('\n/* Manipulación del DOM con un evento del BOM */')

window.addEventListener('resize', () => {
    console.log('Cambió el tamaño del navegador')

    //var p = document.getElementById('info-resize')
    //p.innerHTML = `
    document.getElementById('info-resize').innerHTML =      // chaining
    `
        <b>Cambió el tamaño del navegador</b><br>
        Las dimensiones <span style="color:red;">externas</span> son <i>${outerWidth} x ${outerHeight}</i> pixeles de ancho/alto<br>
        Las dimensiones <span style="color:blue;">internas</span> son <i>${innerWidth} x ${innerHeight}</i> pixeles de ancho/alto<br>
    `
    document.dispatchEvent(ev)
})


// -------------------------------------------------------------------
console.log('\n/* Eventos custom ó personalizados */')
// https://developer.mozilla.org/es/docs/Web/API/Event/Event

// 1) Creación del evento
var ev = new Event('look', { bubbles: true, cancelable: false })
var ev2 = new Event('look2', { bubbles: true, cancelable: false })

// 2) Registro del evento creado
document.addEventListener('look', () => {
    console.log('look')

    document.dispatchEvent(ev2)
})

document.addEventListener('look', () => {
    console.log('otro look')
})


document.addEventListener('look2', () => {
    console.log('look2')
})

// 3) Disparo ó dispatch del evento creado y registrado con addEventListener
//const btnLook = document.getElementById('btn-look')
//btnLook.addEventListener('click', () => {
document.getElementById('btn-look').addEventListener('click', () => {       // chaining
    console.warn('Disparo del evento look')

    document.dispatchEvent(ev)
})

// ------------- setInterval y setTimeout ---------------
console.warn('Inicio', new Date().toLocaleString())
var refTimer = setInterval(() => {
    console.warn('Timer', new Date().toLocaleString())
    document.dispatchEvent(ev2)
},3000)

setTimeout(() => {
    console.error('Timer detenido')
    clearInterval(refTimer)
},10000)























