"use strict";

// Navegador con scroll suave y cambio de color al hacer scroll
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  var a = document.querySelectorAll("#navegador ul li a");

  if (this.document.documentElement.scrollTop != 0) {
    nav.classList.add("scrolled");
    a.forEach(function (element) {
      element.classList.add("scrolled");
    });
  } else {
    nav.classList.remove("scrolled");
    a.forEach(function (element) {
      element.classList.remove("scrolled");
    });
  }
}); // Agregandole funcionalidad al logo

var logo = document.querySelector("#logo img");
logo.addEventListener("click", function () {
  window.scrollTo(0, 0);
});