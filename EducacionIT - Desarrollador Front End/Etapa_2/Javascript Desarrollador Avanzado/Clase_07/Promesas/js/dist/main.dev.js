"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

console.warn(document.querySelector("title").textContent); //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
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

var retardo = function retardo(ms, mensaje) {
  return new Promise(function (resolve, reject) {
    var tipo = _typeof(ms);

    if (tipo == "number") {
      setTimeout(function () {
        return resolve(mensaje);
      }, ms);
    } else {
      var error = {
        title: "Error en entrada ms (debe ser numérica)",
        ms: ms,
        //es igual ms: ms
        tipo: tipo,
        //es igual tipo: tipo
        mensaje: mensaje //es igual mensaje: mensaje

      };
      reject(error);
    }
  });
};
/* -------------- test de la promesa retardo ----------------- */

/* console.warn("Inicio delay");
retardo(2000, "Retardo 2000mS de prueba ok")
  .then((rta) => console.log(rta))
  .catch((error) => console.error("Error delay:", error));
 */

/* -------------- test de la promesa ------------------------- */


console.warn("Inicia la carrera RETARDO");
Promise.allSettled([retardo(2000, "Retardo 2000mS de prueba ok"), retardo(1000, "Retardo 1000mS de prueba ok"), retardo(3000, "Retardo 3000mS de prueba ok")]).then(function (rta) {
  return console.log("Pasaron todas las pruebas", rta);
})["catch"](function (error) {
  console.error("Error en la carrera:", error);
});