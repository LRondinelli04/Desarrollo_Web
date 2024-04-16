// Generar array de lengaujes de programacion
const lenguajes = ["C#", "Python", "PHP", "JavaScript", "Swift"];

// Crear array sin elementos de la cantidad de alumnos que va a haber por lenguaje (va a ser un array de objetos que va a tener 1 lenguaje y la cantidad de alumnos)
const listado = [];

// Creo la clase objeto donde se guardara el lenguaje + la cantidad de alumnos
let nuevo;

// Ingresar alumnos por lenguaje de entre 10 a 35 alumnos
for (leng of lenguajes) {
  let totalAlumnos = prompt(
    "Ingrese la cantidad total de alumnos en el curso: " + leng
  );
  // Pregunto la cantidad de alumnos
  if (totalAlumnos >= 10 && totalAlumnos <= 35) {
    // Si el numero de alumnos es el correcto los agrego al objeto nuevo
    nuevo = { lenguaje: leng, totalEstudiantes: totalAlumnos };
  } else {
    // Muestro el lenguaje pero la cantidad de alumnos es invalido para iniciar el curso
    nuevo = {
      lenguaje: leng,
      totalEstudiantes: "Invalido",
    };
  }
  // Agrego al listado el lenguaje de programacion y si es valido muestro el numero de alumnos y en caso contrario muestro "invalido"
  listado.push(nuevo);
}

// Muestro el listado de objetos
console.table(listado);
