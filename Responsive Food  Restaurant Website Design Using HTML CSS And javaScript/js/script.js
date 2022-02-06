let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

// menu.addEventListener("click", function () {
//   // menu.classList.toggle("fa-times");
//   console.log(1);
// });
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
  console.log(1);
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};
