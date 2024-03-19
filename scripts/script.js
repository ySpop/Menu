// document.addEventListener("DOMContentLoaded", function() {
//   const listicon = document.querySelector(".listicon");
//   const nav = document.querySelector(".navbar-style");

//   listicon.addEventListener("click", () => {
//       nav.classList.toggle("active");
//   });
// });

const links = document.querySelector(".navbar-style");
const listicon = document.querySelector(".listicon");

listicon.addEventListener("click", () =>{
  links.classList.toggle("active");
});

const links1 = document.querySelector(".person-style");
const picon = document.querySelector(".picon");

picon.addEventListener("click", () =>{
  links1.classList.toggle("open");
});