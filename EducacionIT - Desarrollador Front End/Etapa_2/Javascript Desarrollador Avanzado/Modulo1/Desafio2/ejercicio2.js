// Aplicacion de lista de tareas

// Operaciones

// AgregarTarea
const AgregarTarea = function (tarea) {
  AlmacenamientoTareas.push(tarea);
};

// EditarTarea
const editarTarea = function (tarea) {
  AlmacenamientoTareas = AlmacenamientoTareas.map(function (item) {
    return item.codigo == tarea.codigo ? tarea : item;
  });
};

// EliminarTarea ya existente
const EliminarTarea = function (codigo) {
  AlmacenamientoTareas = AlmacenamientoTareas.filter(function (item) {
    return item.codigo != codigo;
  });
};

// ReporteTodasTareas devuelve todas las tareas
const ReporteTodasTareas = function () {
  return AlmacenamientoTareas;
};

// ReporteTareasEnCurso devuelve las tareas cuyo estado es "en-curso"
const ReporteTareasEnCurso = function () {
  return AlmacenamientoTareas.filter(function (item) {
    return item.estado == "en-curso";
  });
};

// ReporteTareasPendientes devuelve las tareas cuyo estado es "pendiente"
const ReporteTareasPendientes = function () {
  return AlmacenamientoTareas.filter(function (item) {
    return item.estado == "pendiente";
  });
};

// ReporteTareasTerminada devuelve las tareas cuyo estado es "terminada"
const ReporteTareasTerminada = function () {
  return AlmacenamientoTareas.filter(function (item) {
    return item.estado == "terminada";
  });
};
