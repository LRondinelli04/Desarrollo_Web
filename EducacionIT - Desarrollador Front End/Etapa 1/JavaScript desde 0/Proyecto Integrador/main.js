let fmPropiedad;
let fmUbicacion;
const costoM2 = 1.16;

let metros2 = prompt("Ingresa los metros cuadrados de la vivienda: ");

let tipoVivienda = prompt(
  "Selecciona la vivienda a cotizar: \n" + "('Casa', 'P.H.', 'Dto. Edificio')"
);

if (tipoVivienda != "") {
  for (propiedad of datosPropiedad) {
    if (propiedad.tipo == tipoVivienda) {
      fmPropiedad = propiedad;
      break;
    }
  }
}

let tipoUbicacion = prompt(
  "Selecciona la ubicación de la vivienda: \n" +
    "('CABA', 'Tandil', 'Costa Atlántica')"
);

if (tipoUbicacion != "") {
  for (ubicacion of datosUbicacion) {
    if (ubicacion.tipo == tipoUbicacion) {
      fmUbicacion = ubicacion;
      break;
    }
  }
}

if (fmPropiedad && fmUbicacion && parseInt(metros2)) {
  let resultado = fmPropiedad.factor * fmUbicacion.factor * metros2 * costoM2;
  console.log("Resultado de la Póliza: $ " + resultado);
} else {
  console.warn("Hubo un error en los datos ingresados.");
}
