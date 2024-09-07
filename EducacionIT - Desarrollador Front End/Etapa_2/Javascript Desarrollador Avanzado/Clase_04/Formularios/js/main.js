console.warn(document.querySelector('title').textContent)


/* ---------------------------------- */
/*       EVENTOS EN FORMULARIOS       */
/* ---------------------------------- */
//const input = document.querySelector('input')

// 1) Evento de click de su botón interno
/* const btn = document.getElementById('btn')
btn.addEventListener('click', e => {
    e.preventDefault()

    var valido = input.checkValidity()
    if(valido) {
        console.log('Click', '['+input.value+']')
    }
    else {
        console.error('Este campo es obligatorio')
    }
}) */

// 2) Evento de submit del formulario
/* const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', e => {
    e.preventDefault()

    console.log('Submit', '['+input.value+']')
}) */


/* --------------------------------------------------------------------------------------- */
/*   Validación de formularios a través de Javascript (utilizando carteles de HTML5 y JS)  */
/* --------------------------------------------------------------------------------------- */
const form = document.querySelector('form')
const input = document.querySelector('input')

function setCustomValidity(mensaje) {
    const div = document.querySelector('div')
    div.innerText = mensaje
    div.style.display = mensaje? 'block':'none'
}

function validadInput(valor) {
    let mensaje = ''

    valor = valor.trim()        // saco los espacios adelante y atrás del string ingresado por input

    const lg = valor.length
    if(lg == 0) {
        mensaje = 'Este campo es obligatorio'
        //console.error(mensaje)
        //input.setCustomValidity(mensaje)        // Cartel HTML5 custom
        setCustomValidity(mensaje)                // Cartel JS
        return null     // si el valor NO cumplió con las validaciones
    }
    else if(lg < 3) {
        mensaje = 'Este campo debe poseer al menos 3 caracteres'
        //console.error(mensaje)
        //input.setCustomValidity(mensaje)        // Cartel HTML5 custom
        setCustomValidity(mensaje)                // Cartel JS
        return null     // si el valor NO cumplió con las validaciones
    }
    else if(lg > 10) {
        mensaje = 'Este campo debe poseer como máximo 10 caracteres'
        //console.error(mensaje)
        //input.setCustomValidity(mensaje)        // Cartel HTML5 custom
        setCustomValidity(mensaje)                // Cartel JS
        return null     // si el valor NO cumplió con las validaciones
    }
    else if(valor.includes(' ')) {
        mensaje = 'Este campo no permite espacios intermedios'
        //console.error(mensaje)
        //input.setCustomValidity(mensaje)        // Cartel HTML5 custom
        setCustomValidity(mensaje)                // Cartel JS
        return null     // si el valor NO cumplió con las validaciones
    }

    //input.setCustomValidity(mensaje)        // Cartel HTML5 custom
    setCustomValidity(mensaje)                // Cartel JS

    valor = encodeURIComponent(valor)

    return valor    // si el valor cumplió con las validaciones
}

function validarInputRegExp(valor) {
    let mensaje = ''

    /* -------------------------------- */
    /*  Ejemplo validación campo nombre */
    /* -------------------------------- */
    //const validador = /^abc$/i
    /* const validador = /^[a-z]{3,10}$/i

    if(!validador.test(valor)) {
        mensaje = 'Este campo no es válido'
        if(valor.length == 0) mensaje = 'Este campo es obligatorio'
        else if(valor.includes(' ')) mensaje = 'Este campo no permite espacios intermedios'
        setCustomValidity(mensaje)
        return null
    } */

    /* -------------------------------- */
    /*  Ejemplo validación campo email  */
    /* -------------------------------- */
    const validador = /^\w+@\w+\.\w{2,3}(\.(ar|uy|br))?$/i

    if(!validador.test(valor)) {
        mensaje = 'Este campo no es válido'
        setCustomValidity(mensaje)
        return null
    }
    
    setCustomValidity(mensaje)
    return valor
}

input.addEventListener('input', () => {
    //console.log(input.value)
    //validadInput(input.value)
    validarInputRegExp(input.value)
})

form.addEventListener('submit', e => {
    e.preventDefault()

    //let valor = validadInput(input.value)
    let valor = validarInputRegExp(input.value)
    if(valor) {
        console.log('Valor ingresado', '['+valor+']')
    }
})

/* --------------------------------------- */
/*         EXPRESIONES REGULARES           */
/*         https://regex101.com/           */
/* --------------------------------------- */
let miRegExp = /a bc/i                     // forma declarativa tipo literal
//let miRegExp = new RegExp('a bc','i')    // forma declarativa tipo objeto

let mensaje = 'HolA bc mundo'

let valido = miRegExp.test(mensaje)
console.log('Mensaje:' + mensaje + ' -> Validación:', valido)
