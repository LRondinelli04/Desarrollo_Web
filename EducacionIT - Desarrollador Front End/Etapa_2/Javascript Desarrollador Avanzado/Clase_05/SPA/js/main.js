function getNombreArchivo(id) {
  return `plantillas/${id}.html`;
}

/* Configurar los click del nav */

function getPlantillas() {
  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Evito que la pagina se reinicie

      const id = link.id;
      // console.log("click", id);

      // Hacer la peticion por AJAX
      const archivo = getNombreArchivo(id);
      console.log(archivo);
    });

    /* link.addEventListener("click", (e) => {
        e.preventDefault();
        const url = e.target.href;
        const urlArray = url.split("/");
        const page = urlArray[urlArray.length - 1];
        console.log(page);
        fetchPage(page);
      }); */
  });
}

function start() {
  getPlantillas();
}

start();
