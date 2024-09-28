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


const prtTime = (mensaje,fn) => fn(mensaje, new Date().toLocaleString())

/* -------------- test de la promesa retardo ----------------- */
/* prtTime('Inicio delay', console.warn)
retardo(true, 'Retardo 2000mS de prueba ok')
    .then( rta => {
        console.log(rta)
        prtTime('Fin delay', console.warn)
    })
    .catch( error => {
        console.error('Error delay:', error)
        prtTime('Error delay', console.error)
    }) */


/* ------------ race / any -------------- */    
/* prtTime('Inicio carrera', console.warn)    
Promise.any([
//Promise.race([
    retardo(13000, 'Retardo 13000mS de prueba ok'),
    retardo(12000, 'Retardo 12000mS de prueba ok'),
    retardo(7000, 'Retardo 7000mS de prueba ok'),
])
.then( rta => {
    console.log('Ganó', rta)
    prtTime('Fin carrera', console.warn)    
})
.catch(error => {
    console.error(error)
    prtTime('Error carrera', console.error)    
}) */

/* ------------ all / allSettled -------------- */    
prtTime('Inicio cumplimiento total', console.warn)    
Promise.allSettled([
//Promise.all([
    retardo(13000, 'Retardo 13000mS de prueba ok'),
    retardo(12000, 'Retardo 12000mS de prueba ok'),
    retardo(7000, 'Retardo 7000mS de prueba ok'),
])
.then( rta => {
    console.log('Cumplió', rta)
    prtTime('Fin cumplimiento total', console.warn)    
})
.catch(error => {
    console.error(error)
    prtTime('Error cumplimiento total', console.error)    
})