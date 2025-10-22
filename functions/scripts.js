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
  const path = window.location.pathname.split("/").pop(); // ejemplo: "parts.html"
  const enlaces = document.querySelectorAll(".nav-link");

  enlaces.forEach(enlace => {
    if (enlace.getAttribute("href") === path) {
      enlace.classList.add("activo");
    }
  });
}