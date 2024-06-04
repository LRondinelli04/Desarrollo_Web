"use strict";
/* let estudiasteJavaScript: boolean = false;

if (estudiasteJavaScript){
    console.log('¡Felicitaciones! Ya sabes JavaScript');
} else {
    console.log('¡Vamos! Aun puedes aprender JavaScript');
} */
let interMiami = 13;
let interNacional = 11;
let messi = 1;
let jugarMessi = true;
let palabras = "Me emocione con el gol de Messi";
function jugar(equipo1, equipo2, jugarMessi) {
    let motivo = "";
    if (jugarMessi) {
        equipo1 += messi;
        motivo = "Porque juega Messi";
    }
    if (equipo1 > equipo2) {
        console.log(`¡Ganó el Inter Miami! ${motivo}`);
    }
    else if (equipo1 < equipo2) {
        console.log("¡Ganó el Inter Nacional!");
    }
    else {
        console.log("¡Empate!");
    }
}
jugar(interMiami, interNacional, jugarMessi);
