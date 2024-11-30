"use strict";

console.warn(document.querySelector("title").textContent);
console.log("\n/* ---------------------------------- */    \n/*   C\xF3digo sincr\xF3nico en Javascript  */\n/* ---------------------------------- */    \n");
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

console.log("\n/* ---------------------------------- */    \n/*  C\xF3digo asincr\xF3nico en Javascript  */\n/* ---------------------------------- */    \n");
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

console.log("\n/* ---------------------------------------------------------- */    \n/*  Comunicaci\xF3n asincr\xF3nica con AJAX (XMLHttpRequest - xhr)  */\n/*          AJAX: Asynchronous Javascript And XML             */\n/* ---------------------------------------------------------- */    \n");
/* -----------------------------------------------------
xhr.readyState
0: la instancia de comunicación está creada (me pongo a hacer un llamado) --> comunicacion telefonica
1: la instancia de comunicación está configurada (marco el numero que quiero llamar)
2: hay intercambio de headers entre el cliente y el servidor (estar escuchando el tono de llamada hasta que el remitente atienda la llamada)
3: transferencia de informacion (estamos hablando por telefono)
4: fin de la comunicación (por éxito ó por falla) (se termina la comunicacion)
----------------------------------------------------- */

/* -----------------------------------------------------
xhr.status
    https://developer.mozilla.org/es/docs/Web/HTTP/Status
404: error (recurso no encontrado)
200: recurso encontrado
----------------------------------------------------- */

var xhr = new XMLHttpRequest(); // creamos una instancia de comunicación asincrónica

console.log(xhr);
console.warn("readyState: [" + xhr.readyState + "]");
xhr.open("get", "texto.txt"); // configuramos la instancia para pedir texto.txt a través del método get http

console.warn("readyState: [" + xhr.readyState + "]");
xhr.addEventListener("readystatechange", function () {
  console.error("readyState: [" + xhr.readyState + "]"); // me comunica cuando cambia la instancia
}); // Registrar un evento

xhr.addEventListener("load", function () {
  // Función callback que se ejecuta cuando la comunicación se completa para ver la respuesta asincrónica 
  console.warn("readyState: [" + xhr.readyState + "]");

  if (xhr.status == 200) {
    // si la respuesta es exitosa
    var respuesta = xhr.response;
    console.log("Respuesta: [" + respuesta + "]");
    document.querySelector("p").innerText = respuesta;
  } else {
    console.error("Error en la comunicación http, estado:", xhr.status);
  }
});
xhr.send(); // hago la petición

/* setTimeout(() => {
    console.log('Respuesta: [' + xhr.response + ']')
    console.warn('readyState: [' + xhr.readyState + ']')
},3000) */