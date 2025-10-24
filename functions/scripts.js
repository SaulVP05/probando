document.addEventListener("DOMContentLoaded", () => {
  fetch("./components/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;

        activarEnlaceActual();
        activarScrollNavbar();
    });

  fetch("./components/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });
});

function activarScrollNavbar() {
  let lastScrollTop = 0;
  const navbar = document.getElementById("mainNavbar");

  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 100) {
      navbar.classList.add("navbar-hidden");
    } else {
      navbar.classList.remove("navbar-hidden");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
}
function activarEnlaceActual() {
  const path = window.location.pathname.split("/").pop() || "index.html";

  const enlaces = document.querySelectorAll(".enlace, .enlace2");

  enlaces.forEach(enlace => {
    const href = enlace.getAttribute("href");

    if (href === path || href === `./${path}` || href === `/${path}`) {
      enlace.classList.add("activo");

      if (enlace.classList.contains("enlace2")) {
        enlace.classList.add("bg-secondary");
      }
    }
  });
}