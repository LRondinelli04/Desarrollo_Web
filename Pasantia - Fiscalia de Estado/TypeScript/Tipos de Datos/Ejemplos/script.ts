/* let estudiasteJavaScript: boolean = false;

if (estudiasteJavaScript){
    console.log('¡Felicitaciones! Ya sabes JavaScript');
} else {
    console.log('¡Vamos! Aun puedes aprender JavaScript');
} */

let interMiami: number = 13;
let interNacional: number = 11;
let messi: number = 1;
let jugarMessi: boolean = true;

let palabras: string = "Me emocione con el gol de Messi";

function jugar(equipo1: number, equipo2: number, jugarMessi: boolean): void {
  let motivo: string = "";
  if (jugarMessi) {
    equipo1 += messi;
    motivo = "Porque juega Messi";
  }
  if (equipo1 > equipo2) {
    console.log(`¡Ganó el Inter Miami! ${motivo}`);
  } else if (equipo1 < equipo2) {
    console.log("¡Ganó el Inter Nacional!");
  } else {
    console.log("¡Empate!");
  }
}

jugar(interMiami, interNacional, jugarMessi);
