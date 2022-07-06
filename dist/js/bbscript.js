const toggleMenu = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".header__actions");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  mobileNav.classList.toggle("open");
});

const links = document.querySelectorAll(".links__item h3");

links.forEach((link) =>{
    link.addEventListener("click",()=> {
        link.nextElementSibling.classList.toggle("open");
        link.querySelector("i").classList.toggle("open");
    });
});