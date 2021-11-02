window.addEventListener("load", function () {
  const menu = document.querySelector(".menu");
  const menuToggle = document.querySelector(".menu-toggle");
  const menuClose = document.querySelector(".menu-close");
  menuToggle.addEventListener("click", handleToggleMenu);
  function handleToggleMenu(e) {
    menu.classList.add("is-active");
    menuClose.classList.add("is-active");
  }
  menuClose.addEventListener("click", function () {
    menu.classList.remove("is-active");
    menuClose.classList.remove("is-active");
  });
});
