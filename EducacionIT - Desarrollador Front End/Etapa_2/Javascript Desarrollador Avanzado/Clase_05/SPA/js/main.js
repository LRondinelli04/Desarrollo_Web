function ajax(url, metodo = "get") {
  const xhr = new XMLHttpRequest();
  xhr.open(metodo, url);
  xhr.send();
}

function getNombreArchivo(id) {
  return `plantillas/${id}.html`;
}

/* Configurar los click del nav */

function getPlantillas() {
  const main = document.querySelectorAll("main");
  /* Carga de la pagina de inicio */
  const archivo = getNombreArchivo("home");
  const xhr = ajax(archivo);
  xhr.addEventListener("load", () => {
    if (xhr.response == 200) {
      const plantilla = xhr.response;
      main.innerHTML = plantilla;
    }
  });

  const links = document.querySelectorAll("a");
  /* Carga dinamica de las vistas de navegacion */

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Evito que la pagina se reinicie

      const id = link.id;
      // console.log("click", id);

      // Hacer la peticion por AJAX
      const archivo = getNombreArchivo(id);
      console.warn(archivo);

      const xhr = ajax(archivo);
      xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
          const plantilla = xhr.response;
          main.innerHTML = plantilla;
        }
      });
    });
  });
}

function start() {
  /* carga de la barra de navegacion */
  const archivo = getNombreArchivo("navbar");
  const xhr = ajax(archivo);
  xhr.addEventListener("load", () => {
    if (xhr.status == 200) {
      const plantilla = xhr.response;
      header.innerHTML = plantilla;

      getPlantillas();
    }
  });
}

start();
