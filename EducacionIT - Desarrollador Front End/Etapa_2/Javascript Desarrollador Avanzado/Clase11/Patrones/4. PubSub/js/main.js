//https://refactoring.guru/es/design-patterns/observer
//https://rxjs.dev/
//https://rxjs.dev/guide/observable
//https://rxjs.dev/guide/observer

// ------------------------------------------------------
console.log(`
/* ------------------------------------------ */    
/*    FUNCTION PULL (pasiva) - Single Data    */
/* ------------------------------------------ */    
`)

/* Productor de datos (pasivo) */
let contadorFunction = 0
function contarFunction() {
    return contadorFunction++
}

/* Consumidor de datos (activo) */
console.log(contarFunction())
console.log(contarFunction())
console.log(contarFunction())
console.log(contarFunction())


// ------------------------------------------------------
console.log(`
/* ------------------------------------------ */    
/*   ITERATOR PULL (pasiva) - Multiple Data   */
/* ------------------------------------------ */    
`)

/* Productor de datos (pasivo) */
let contadorIterator = 0
function* fgContarIterator() {
    yield contadorIterator++
    yield contadorIterator++
    yield contadorIterator++
    return contadorIterator++
}

/* Consumidor de datos (activo) */
const contarIterator = fgContarIterator()
console.log(contarIterator)

console.log( contarIterator.next().value )
console.log( contarIterator.next().value )
console.log( contarIterator.next().value )
console.log( contarIterator.next().value )


// ------------------------------------------------------
console.log(`
/* ------------------------------------------ */    
/*     PROMISE PUSH (activa) - Single Data    */
/* ------------------------------------------ */    
`)

/* Productor de datos (activo) */
let contadorPromise = 0
function contarPromise(tiempo = 0) {
    return new Promise(resolve => {
        setTimeout(() => resolve(contadorPromise++), tiempo)
    })
}
    

/* Consumidor de datos (pasivo) */
contarPromise(0).then( contador => console.log('Promise', contador))
contarPromise(0).then( contador => console.log('Promise', contador))
contarPromise(0).then( contador => console.log('Promise', contador))
contarPromise(0).then( contador => console.log('Promise', contador))


// ------------------------------------------------------
console.log(`
/* ------------------------------------------ */    
/*  OBSERVABLE PUSH (activo) - Múltiple Data  */
/* ------------------------------------------ */    
`)

//const Observable = rxjs.Observable
const { Observable } = rxjs         // Object Destructuring (Destructing Assigment)
const { delay, share } = rxjs.operators


/* Productor de datos (activo) */
let contadorObservable = 0
function fContarObservable(tiempo = 0) {
    let refTimer = null
    return new Observable(suscriber => {
        refTimer = setInterval(() => {
            //console.warn(contadorObservable)
            suscriber.next(contadorObservable++)
            //if(contadorObservable == 2) suscriber.error('Error en fContarObservable')
            if(contadorObservable > 3) suscriber.complete()
        }, tiempo)

        return () => {
            console.error('---> suscriptor desuscripto')
            clearInterval(refTimer)
        }
    })
}
    
/* Consumidor de datos (pasivo) */
//fContarObservable(1000).subscribe( contador => console.log('Observable', contador))


// contarObservable: Observable (Publicador - Pub)
const contarObservable = fContarObservable(0)

// contarObserver: Observer (Suscriptor - Sub)
const contarObserver = {
    next: contador => console.log('Observable', contador),
    error: error => console.error('ERROR:', error),
    complete: () => console.warn('Suscripción a finalizar')
}

// ---> Suscripción del Observer al Observable
const suscripcion = contarObservable.subscribe( contarObserver )

// ---> Desuscripción del Observer al Observable (despues de 5 segundos de haberme suscripto)
//setTimeout(() => suscripcion.unsubscribe(), 5000) 


/* ----------------------------------------------- */
/*          Otro ejemplo de Observables            */
/* ----------------------------------------------- */
function fEspejarInput() {
    const input = document.querySelector('input')
    return new Observable(suscriber => {
        const ateEventInput = () => {
            const dato = input.value.split('').reverse().join('')
            console.warn(dato)
            suscriber.next(dato)
        }
        input.addEventListener('input', ateEventInput)

        return () => {
            console.error('---> EspejarInput desuscripto')
            input.removeEventListener('input', ateEventInput)
        }
    })
}


// ---- Observable: Pub
const espejarInput = fEspejarInput().pipe(share(), delay(1000))

// ---- Observer: Sub
const espejarSpan1 = { next: dato => document.querySelectorAll('span')[0].innerText = dato }
const espejarSpan2 = { next: dato => document.querySelectorAll('span')[1].innerText = dato }
const espejarSpan3 = { next: dato => document.querySelectorAll('span')[2].innerText = dato }

// ---- Suscripción
const suscripcionEspejar1 = espejarInput.subscribe( espejarSpan1 )
const suscripcionEspejar2 = espejarInput.subscribe( espejarSpan2 )
const suscripcionEspejar3 = espejarInput.subscribe( espejarSpan3 )

// ---- Desuscripción
/* setTimeout(() => suscripcionEspejar1.unsubscribe(), 10000)
setTimeout(() => suscripcionEspejar2.unsubscribe(), 15000)
setTimeout(() => suscripcionEspejar3.unsubscribe(), 20000)

setTimeout(() => {
    const suscripcionEspejar2 = espejarInput.subscribe( espejarSpan2 )
    setTimeout(() => suscripcionEspejar2.unsubscribe(), 10000)
},30000) */