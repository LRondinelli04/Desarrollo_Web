// Crear funcion que al hacer click en el boton del navegador, despliegue el navegador en caso de estar adaptado para mobil

// Creo constante de boton de navegador y el menu
const menuBoton = document.querySelector("#boton-nav");
const menuList = document.querySelector("nav .menu");

// Creo funcion que al hacer click en el boton de navegacion, se despliegue el menu
function desplegarMenu() {
    menuList.classList.toggle("activo");
}

// Creo evento que al hacer click en el boton de navegacion, se ejecute la funcion desplegarMenu
menuBoton.addEventListener("click", desplegarMenu);