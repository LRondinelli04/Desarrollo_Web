console.warn( document.querySelector('title').textContent )


/* -------------------------------------------------------------- */
/*    Ejemplos de persistencia en localStorage y sessionStorage   */
/* -------------------------------------------------------------- */
//let a = Number(localStorage.getItem('a')) || 1
let a = Number(sessionStorage.getItem('a')) || 1

function cambiar(val) {
    a = val
    //localStorage.setItem('a', a)
    sessionStorage.setItem('a', a)
    return `variable 'a' actualizada`
}


// ------------------------------------------
console.log(`
/* ------------------------------------------- */    
/*      Ejemplo de uso de localStorage         */
/* ------------------------------------------- */    
`)

/* localStorage.setItem('usuario', 'Juan')
localStorage.setItem('numero', 3)
localStorage.setItem('boolean', true)
localStorage.setItem('objeto', JSON.stringify({ x: 1 }))
localStorage.setItem('array', JSON.stringify([ {x: 1}, {y:2}, {z:3 } ])) */

/* console.log(String(localStorage.getItem('usuario')))
console.log(Number(localStorage.getItem('numero')))
console.log(Boolean(localStorage.getItem('boolean')))
console.log(JSON.parse(localStorage.getItem('objeto')))
console.log(JSON.parse(localStorage.getItem('array'))) */

/* console.log(localStorage.getItem('usuario'))
console.log(JSON.parse(localStorage.getItem('numero')))
console.log(JSON.parse(localStorage.getItem('boolean')))
console.log(JSON.parse(localStorage.getItem('objeto')))
console.log(JSON.parse(localStorage.getItem('array'))) */


function representarStorage(storage) {
    for(let i=0; i<storage.length; i++) {
        const clave = storage.key(i)
        let valor = storage.getItem(clave)

        try { valor = JSON.parse(valor) }
        //catch(error) { console.error(error.message) }
        catch {}

        console.log(i, clave, valor)
    }
}

// antes
representarStorage(localStorage)

//localStorage.removeItem('numero')
localStorage.clear()

//después
representarStorage(localStorage)


console.log(`
/* ------------------------------------------- */    
/*      Ejemplo de uso de sessionStorage       */
/* ------------------------------------------- */    
`)

/* sessionStorage.setItem('usuario', 'Juan')
sessionStorage.setItem('numero', 3)
sessionStorage.setItem('boolean', true)
sessionStorage.setItem('objeto', JSON.stringify({ x: 1 }))
sessionStorage.setItem('array', JSON.stringify([ {x: 1}, {y:2}, {z:3 } ])) */
representarStorage(sessionStorage)


console.log(`
/* ------------------------------------------- */    
/*          Eventos de almacenamiento          */
/* ------------------------------------------- */    
`)

setInterval(() => {
    //localStorage.setItem('timestamp', Date.now())
},2000)


console.log(`
/* ------------------------------------------- */    
/*         Ejemplos de uso de cookies          */
/* ------------------------------------------- */    
`)

// Sin tiempo de expiración
//document.cookie = 'nombre2=Ana'
    
// Con tiempo de expiración -> Max-Age: tiempo de expiración de la cookie en segundos
//document.cookie = 'nombre2=Ana;Max-Age=30'


console.log(`
/* ------------------------------------------- */    
/*               Chrome Dev tools              */
/* ------------------------------------------- */    
`)

console.log('Antes del retardo')
for(let i=0; i<1e9; i++) {}
console.log('Después del retardo')
