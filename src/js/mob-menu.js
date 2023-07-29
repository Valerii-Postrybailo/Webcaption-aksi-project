(() => {
  const refs = {
      openMenuBtn: document.querySelector(".menu-open-btn"),
      closeMenuBtn: document.querySelector(".mob-menu-close-btn"),
      menu: document.querySelector("[data-menu]"),

      mobMenuItems: document.querySelectorAll(".mob-nav__list-item")
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  refs.mobMenuItems.forEach((item)  => item.addEventListener("click", toggleMenu))

  function toggleMenu() {
    document.body.classList.toggle("modal-open");
    refs.menu.classList.toggle("is-hidden");
  }
})();