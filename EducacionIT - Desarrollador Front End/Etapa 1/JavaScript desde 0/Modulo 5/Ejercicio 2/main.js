const listado = [
  { lenguaje: "C#", totalEstudiantes: 22 },
  { lenguaje: "Python", totalEstudiantes: 31 },
  { lenguaje: "PHP", totalEstudiantes: 18 },
  { lenguaje: "JavaScript", totalEstudiantes: 35 },
  { lenguaje: "Swift", totalEstudiantes: 30 },
];

console.table(listado);

const body = document.querySelector("#info");

function informacion(lista) {
  return `<tr> 
            <td>${lista.lenguaje}</td> 
            <td>${lista.totalEstudiantes}</td> 
        </tr>`;
}

for (lista of listado) {
  body.innerHTML += informacion(lista);
}
