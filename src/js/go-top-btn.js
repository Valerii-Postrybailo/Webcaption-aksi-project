const goTopBtn = document.querySelector(".go-top");


const goTop = () => { 
  console.log("click")
  if (window.pageYOffset > 0) {
    window.scrollBy(0,-75);
    setTimeout(goTop,0)
  }
}

const trackScroll = () => {
  const offset = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
  if(offset > coords){
    goTopBtn.classList.add("go-top--show");
  } else {
    goTopBtn.classList.remove("go-top--show");
  }
}

window.addEventListener("scroll", trackScroll);

goTopBtn.addEventListener('click', goTop);

