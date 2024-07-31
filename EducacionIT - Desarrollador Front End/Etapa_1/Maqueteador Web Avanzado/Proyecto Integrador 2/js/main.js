// Navegador con scroll suave y cambio de color al hacer scroll
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  const a = document.querySelectorAll("#navegador ul li a");
  if (this.document.documentElement.scrollTop != 0) {
    nav.classList.add("scrolled");
    a.forEach((element) => {
      element.classList.add("scrolled");
    });
  } else {
    nav.classList.remove("scrolled");
    a.forEach((element) => {
      element.classList.remove("scrolled");
    });
  }
});

// Agregandole funcionalidad al logo
const logo = document.querySelector("#logo img");
logo.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
