(function() {
    'use strict'

    var clave = 'qwerty1234'

    function getClaveEncriptada() {
        return clave.split('').reverse().join('')
    }

    function firmarTexto(texto) {
        return texto + '.' + parseInt(Math.random() * 10000)
    }

    // exportación con wrapper
    window.modulo2 = {
        getClaveEncriptada: () => getClaveEncriptada(),
        firmarTexto: texto => firmarTexto(texto)
    }

    console.warn('Módulo 2 instalado')
})()
