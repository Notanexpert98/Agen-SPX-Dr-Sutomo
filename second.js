const Navbar = document.querySelector(".navbar-small");
document.querySelector("#menu").onclick = () => {
  Navbar.classList.toggle("active");
};

//Klik diluar sidebar untuk hilangkan navbar
const striptiga = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!striptiga.contains(e.target) && !Navbar.contains(e.target)) {
    Navbar.classList.remove("active");
  }
});
