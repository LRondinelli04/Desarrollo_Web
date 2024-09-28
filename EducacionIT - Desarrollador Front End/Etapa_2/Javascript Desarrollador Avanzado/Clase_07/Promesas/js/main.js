console.warn( document.querySelector('title').textContent )

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises

//https://javascript.info/
//https://es.javascript.info/
//https://es.javascript.info/async


/* ----------------------------------------------- */
/*      Métodos estáticos: resolve y reject        */
/* ----------------------------------------------- */
//Promise.reject('bad value')
/* Promise.resolve(6)
    .then(rta => rta * 2)
    .then(rta => {
        if(rta != 12) throw rta
        return rta
    })
    .then(rta => console.log('ok', rta))                // then: método instancia
    .catch(error => console.error('error', error))      // catch: método instancia
    .finally(() => console.warn('Promesa finalizada'))  // finally: método instancia */



/* ----------------------------------------------- */
/*        Métodos estáticos: race y all            */
/* ----------------------------------------------- */    
const retardo = (ms, mensaje) => new Promise((resolve, reject) => {
    const tipo = typeof ms
    if(tipo == 'number') {
        setTimeout(() => resolve(mensaje), ms)
    }
    else {
        const error = {
            title: 'Error en entrada ms (debe ser numérica)',
            ms, //es igual ms: ms
            tipo, //es igual tipo: tipo
            mensaje, //es igual mensaje: mensaje
        }
        reject(error)
    }
})


/* -------------- test de la promesa retardo ----------------- */
console.warn('Inicio delay')
retardo(2000, 'Retardo 2000mS de prueba ok')
    .then( rta => console.log(rta))
    .catch( error => console.error('Error delay:', error))