(() => {
  const refs = {
      openPriceBtns: document.querySelectorAll(".open-price-btn"),
      closePriceBtn: document.querySelector(".price-window-close-btn"),
      secondClosePriceBtn: document.querySelector(".price-modal-second-close-btn"),
      price: document.querySelector("[data-modal-price]"),
      backdrop: document.querySelector(".backdrop")
  };

  refs.openPriceBtns.forEach((item)  => item.addEventListener("click", toggleMenu))
  refs.closePriceBtn.addEventListener("click", toggleMenu);
  refs.secondClosePriceBtn.addEventListener("click", toggleMenu);

  refs.backdrop.addEventListener("click", onCloseModalByBackdropClick);

  function onCloseModalByBackdropClick(event){
    if (event.target === event.currentTarget){
      toggleMenu()
    }
  }

  function toggleMenu() {
      document.body.classList.toggle("modal-open");
      refs.price.classList.toggle("is-hidden");
  }
})();