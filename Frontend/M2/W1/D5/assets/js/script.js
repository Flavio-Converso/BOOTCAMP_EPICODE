const navbar = document.querySelector(".navbar");
const button = document.getElementById("cambiaColore");
window.addEventListener("scroll", () => {
  if (window.scrollY > 350) {
    navbar.classList.add("navbarW");
    button.style.backgroundColor = "green";
  } else {
    navbar.classList.remove("navbarW");
    button.style.backgroundColor = "#191919";
  }
});
