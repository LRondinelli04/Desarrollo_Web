const libreria2 = (function() {
    'use strict'

    var clave = 'qwerty1234'

    function getClaveEncriptada() {
        return clave.split('').reverse().join('')
    }

    function firmarTexto(texto) {
        return texto + '.' + parseInt(Math.random() * 10000)
    }

    console.warn('Librería 2 instalada')

    // exportación con wrapper
    return {
        getClaveEncriptada: () => getClaveEncriptada(),
        firmarTexto: texto => firmarTexto(texto)
    }
})()
