// main js file

function scrollFunction() {
    let navbar = document.getElementById("navbarh");
    let navbar_btn = document.getElementById("navbar-btn");

    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      navbar.classList.add("navbar-light");
      navbar.classList.add("bg-light");
      navbar.classList.remove("navbarh-link");
      navbar.classList.remove("navbar-dark");
      navbar_btn.classList.remove("btn-s");
      navbar_btn.classList.remove("btn");
      navbar_btn.classList.remove("btn-round");
      navbar_btn.classList.remove("btn-glow");
    } else {
      navbar.classList.add("navbarh-link");
      navbar.classList.add("navbar-dark");
      navbar.classList.remove("bg-light");
      navbar.classList.remove("navbar-light");
      navbar.style.backgroundColor = "rgba(56, 57, 66, 0)";
      navbar.style.color = "#FFF";
      navbar_btn.classList.add("btn");
      navbar_btn.classList.add("btn-s");
      navbar_btn.classList.add("btn-round");
      navbar_btn.classList.add("btn-glow");
    }
  }