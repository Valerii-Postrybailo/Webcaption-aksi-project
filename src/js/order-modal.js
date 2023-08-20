(() => {
  const refs = {
      openOrderModalBtn: document.querySelector(".open-order-modal-btn"),
      closeOrderModalBtn: document.querySelector(".order-modal-close-btn"),
      secondCloseOrderModalBtn: document.querySelector(".order-modal-second-close-btn"),
      order: document.querySelector("[order-modal-price]"),
      orderBackdrop: document.querySelector(".order-bckd")
  };

  refs.openOrderModalBtn.addEventListener("click", toggleMenu);
  refs.closeOrderModalBtn.addEventListener("click", toggleMenu);
  refs.secondCloseOrderModalBtn.addEventListener("click", toggleMenu);

  refs.orderBackdrop.addEventListener("click", onCloseModalByBackdropClick);

  function onCloseModalByBackdropClick(event){
    console.log("click")
    if (event.target === event.currentTarget){
      toggleMenu()
    }
  }

  function toggleMenu() {
      document.body.classList.toggle("modal-open");
      refs.order.classList.toggle("is-hidden");
  }
})();