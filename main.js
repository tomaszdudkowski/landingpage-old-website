// main js file

function scrollFunction() {
    let navbar = document.getElementById("navbar");
    let navbar_btn = document.getElementById("navbar-btn");

    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      navbar.style.height = "5.3rem";
      navbar.classList.add("navbar-link");
      navbar.style.backgroundColor = "#fff";
      navbar_btn.classList.remove("btn-s");
      navbar_btn.classList.remove("btn");
      navbar_btn.classList.remove("btn-round");
      navbar_btn.classList.remove("btn-glow");
    } else {
      navbar.style.height = "6rem";
      navbar.classList.remove("navbar-link");
      navbar.style.backgroundColor = "rgba(56, 57, 66, 0)";
      navbar.style.color = "#FFF";
      navbar_btn.classList.add("btn");
      navbar_btn.classList.add("btn-s");
      navbar_btn.classList.add("btn-round");
      navbar_btn.classList.add("btn-glow");
    }
  }