let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  spaceBetween: 3,
  effect: "fade",
  grabCursor: true,
  centeredSlides: true,
  // speed: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
