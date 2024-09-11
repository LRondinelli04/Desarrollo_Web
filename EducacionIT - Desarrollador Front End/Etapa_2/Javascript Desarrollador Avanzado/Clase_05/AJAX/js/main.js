console.warn( document.querySelector('title').textContent )

console.log(`
/* ---------------------------------- */    
/*   Código sincrónico en Javascript  */
/* ---------------------------------- */    
`)

/* function sumar(a,b) {
    for(let i=0; i<3e9; i++) {}      // retardo bloqueante
    return a + b
}

console.log('Suma 1')
let res = sumar(5,6)
console.log(res)

console.log('Suma 2')
res = sumar(5,res)
console.log(res)

console.log('Suma 3')
res = sumar(5,res)
console.log(res)
 */


console.log(`
/* ---------------------------------- */    
/*  Código asincrónico en Javascript  */
/* ---------------------------------- */    
`)

/* function sumar(a,b,cb) {
    setTimeout(() => cb(a+b),2000)      // retardo NO bloqueante
}

console.log('Suma 1')
sumar(5,6, res => {
    console.log(res)

    console.log('Suma 2')
    sumar(5,res, res => {
        console.log(res)

        console.log('Suma 3')
        sumar(5,res, res => {
            console.log(res)
        })
    })
})


console.log('Otras tareas...') */


console.log(`
/* ---------------------------------------------------------- */    
/*  Comunicación asincrónica con AJAX (XMLHttpRequest - xhr)  */
/*          AJAX: Asynchronous Javascript And XML             */
/* ---------------------------------------------------------- */    
`)

/* -----------------------------------------------------
xhr.readyState
0: la instancia de comunicación está creada
1: la instancia de comunicación está configurada
2: hay intercambio de headers entre el cliente y el servidor
3: transferencia de información
4: fin de la comunicación (por éxito ó por falla)
----------------------------------------------------- */
/* -----------------------------------------------------
xhr.status
//https://developer.mozilla.org/es/docs/Web/HTTP/Status
404: error (recurso no encontrado)
200: recurso encontrado
----------------------------------------------------- */


const xhr = new XMLHttpRequest()        // creamos una instancia de comunicación asincrónica
console.log(xhr)
console.warn('readyState: [' + xhr.readyState + ']')

xhr.open('get','texto.txt')             // configuramos la instancia para pedir texto.txt a través del método get http
console.warn('readyState: [' + xhr.readyState + ']')

xhr.addEventListener('readystatechange', () => {
    console.error('readyState: [' + xhr.readyState + ']')
})

xhr.addEventListener('load', () => {
    console.warn('readyState: [' + xhr.readyState + ']')
    if(xhr.status == 200) {
        let respuesta = xhr.response
        console.log('Respuesta: [' + respuesta + ']')
        document.querySelector('p').innerText = respuesta
    }
    else {
        console.error('Error en la comunicación http, estado:', xhr.status)
    }
})

xhr.send()                              // hago la petición

/* setTimeout(() => {
    console.log('Respuesta: [' + xhr.response + ']')
    console.warn('readyState: [' + xhr.readyState + ']')
},3000) */
