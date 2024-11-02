(function() {
    'use strict'

    let instancia

    function App() {
        if(instancia == undefined) {
            this.id = Math.random()
            instancia = this
        }
        else {
            // forma 1
            //throw new Error('No se puede construir más de una instancia de esta función constructora')
            
            // forma 2
            console.warn('No se puede construir más de una instancia de esta función constructora')
            return instancia
        }
    }

    window.App = App

    console.warn('Singleton instalado')
})()