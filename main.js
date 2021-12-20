// main js file

let dock = true;
let click = true;

function collapseMenu() {
  const navbar = document.getElementById("navbarh");
  const navbar_btn = document.getElementById("navbar-btn");
  const navbar_collapse = document.getElementById("navbarNav");

  if ((document.body.scrollTop < 80 || document.documentElement.scrollTop < 80) && (dock == false)) {
    dock = true;
  }

  if ((document.body.scrollTop < 80 || document.documentElement.scrollTop < 80) && (dock == true) && (click == true)) {
    navbar.classList.toggle("navbar-light");
    navbar.classList.toggle("bg-light");
    navbar.classList.toggle("navbarh-link");
    navbar.classList.toggle("navbar-dark");
    navbar_btn.classList.toggle("btn-s");
    navbar_btn.classList.toggle("btn");
    navbar_btn.classList.toggle("btn-round");
    navbar_btn.classList.toggle("btn-glow");
  }
    
  
    
    // navbar.classList.add("navbarh-link");
    // navbar.classList.add("navbar-dark");
    // navbar.classList.remove("bg-light");
    // navbar.classList.remove("navbar-light");
    // navbar.style.backgroundColor = "rgba(56, 57, 66, 0)";
    // navbar.style.color = "#FFF";
    // navbar_btn.classList.add("btn");
    // navbar_btn.classList.add("btn-s");
    // navbar_btn.classList.add("btn-round");
    // navbar_btn.classList.add("btn-glow");

}

function scrollFunction() {
  const navbar = document.getElementById("navbarh");
  const navbar_btn = document.getElementById("navbar-btn");

  if ((document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) && (dock == true)) {
      dock = false;
      click = false;
  }

  if ((document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) && (dock == false)) {
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
    click = true;
  }
}
