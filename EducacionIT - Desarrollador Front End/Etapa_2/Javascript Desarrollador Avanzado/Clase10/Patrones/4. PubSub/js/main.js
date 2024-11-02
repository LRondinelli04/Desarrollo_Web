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

/* Productor de datos (activo) */
let contadorObservable = 0
function contarObservable(tiempo = 0) {
    return new Observable(suscriber => {
        setInterval(() => suscriber.next(contadorObservable++), tiempo)
    })
}
    
/* Consumidor de datos (pasivo) */
contarObservable(1000).subscribe( contador => console.log('Observable', contador))