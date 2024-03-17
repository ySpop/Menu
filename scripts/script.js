document.addEventListener("DOMContentLoaded", function() {
  const listicon = document.querySelector(".listicon");
  const nav = document.querySelector(".navbar-style");

  listicon.addEventListener("click", () => {
      nav.classList.toggle("active");
  });
});