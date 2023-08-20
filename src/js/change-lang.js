const findElAndAddEventListener = () =>{
  const refs = {
  langSelectorDiv: document.querySelector(".language-selector"),
  languageButton: document.querySelectorAll('.language-button'),

  ukrainianLangBtn : document.querySelector(".language-button.ukrainian-lang"),
  englishLangBtn: document.querySelector(".language-button.english-lang"),
  languagePopup: document.querySelector('.language-popup'),
  };

  return refs;
};

const catchMouseEvent = () => {
  
  const elRefs = findElAndAddEventListener();

  elRefs.languageButton.forEach((el) => el.addEventListener('mouseover', () => {
    elRefs.languagePopup.style.display = 'block';
  }))

  elRefs.languageButton.forEach((el) => el.addEventListener('mouseout', () => {
    elRefs.languagePopup.style.display = 'none';
  }))

  elRefs.languagePopup.addEventListener('mouseover', () => {
    elRefs.languagePopup.style.display = 'block';
  });
  
  elRefs.languagePopup.addEventListener('mouseout', () => {
    elRefs.languagePopup.style.display = 'none';
  });
}

const renderEngLangBtn = () =>{
  const elRefs = findElAndAddEventListener();

  elRefs.langSelectorDiv.innerHTML = `
    <button class="language-button english-lang" type="button">
      <svg class="language-button__icon" width="30" height="30" preserveAspectRatio="none" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 55.2 38.4" xml:space="preserve">
        <style>.st1{fill:#c8102e}</style>
        <path d="M2.87 38.4h49.46c1.59-.09 2.87-1.42 2.87-3.03V3.03c0-1.66-1.35-3.02-3.01-3.03H3.01A3.037 3.037 0 000 3.03v32.33c0 1.62 1.28 2.95 2.87 3.04z" fill="#fefefe"/>
        <path class="st1" d="M23.74 23.03V38.4h7.68V23.03H55.2v-7.68H31.42V0h-7.68v15.35H0v7.68h23.74z"/>
        <path d="M33.98 12.43V0h18.23c1.26.02 2.34.81 2.78 1.92L33.98 12.43zm0 13.54V38.4h18.35c1.21-.07 2.23-.85 2.66-1.92L33.98 25.97zm-12.8 0V38.4H2.87a3.043 3.043 0 01-2.66-1.94l20.97-10.49zm0-13.54V0H2.99A3.04 3.04 0 00.21 1.94l20.97 10.49zM0 12.8h7.65L0 8.97v3.83zm55.2 0h-7.69l7.69-3.85v3.85zm0 12.8h-7.69l7.69 3.85V25.6zM0 25.6h7.65L0 29.43V25.6z" fill="#012169"/>
        <path class="st1" d="M55.2 3.25L36.15 12.8h4.26L55.2 5.4V3.25zM19.01 25.6h-4.26L0 32.98v2.15l19.05-9.53h-.04zm-8.49-12.79h4.26L0 5.41v2.14l10.52 5.26zm34.11 12.78h-4.26l14.83 7.43v-2.14l-10.57-5.29z"/>
      </svg> 
    </button>

    <div class="language-popup">
      <button class="language-button ukrainian-lang" type="button">
        <svg class="language-button__icon" width="30" height="30">
          <use href="./src/images/symbol-defs.svg#icon-ukraine"></use>
        </svg>
      </button>
    </div>
  `;   
  
  catchMouseEvent();

  const elRefs1 = findElAndAddEventListener();

  elRefs1.englishLangBtn.classList.add("active-language");
  elRefs1.ukrainianLangBtn.classList.remove("active-language");
}

const renderUkrLangBtn = ()=> {
  const elRefs = findElAndAddEventListener()

  elRefs.langSelectorDiv.innerHTML = `
    <button class="language-button ukrainian-lang" type="button">
      <svg class="language-button__icon" width="30" height="30">
        <use href="./src/images/symbol-defs.svg#icon-ukraine"></use>
      </svg>
    </button>

    <div class="language-popup">
      <button class="language-button english-lang" type="button">
        <svg class="language-button__icon" width="30" height="30" preserveAspectRatio="none" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 55.2 38.4" xml:space="preserve">
          <style>.st1{fill:#c8102e}</style>
          <path d="M2.87 38.4h49.46c1.59-.09 2.87-1.42 2.87-3.03V3.03c0-1.66-1.35-3.02-3.01-3.03H3.01A3.037 3.037 0 000 3.03v32.33c0 1.62 1.28 2.95 2.87 3.04z" fill="#fefefe"/>
          <path class="st1" d="M23.74 23.03V38.4h7.68V23.03H55.2v-7.68H31.42V0h-7.68v15.35H0v7.68h23.74z"/>
          <path d="M33.98 12.43V0h18.23c1.26.02 2.34.81 2.78 1.92L33.98 12.43zm0 13.54V38.4h18.35c1.21-.07 2.23-.85 2.66-1.92L33.98 25.97zm-12.8 0V38.4H2.87a3.043 3.043 0 01-2.66-1.94l20.97-10.49zm0-13.54V0H2.99A3.04 3.04 0 00.21 1.94l20.97 10.49zM0 12.8h7.65L0 8.97v3.83zm55.2 0h-7.69l7.69-3.85v3.85zm0 12.8h-7.69l7.69 3.85V25.6zM0 25.6h7.65L0 29.43V25.6z" fill="#012169"/>
          <path class="st1" d="M55.2 3.25L36.15 12.8h4.26L55.2 5.4V3.25zM19.01 25.6h-4.26L0 32.98v2.15l19.05-9.53h-.04zm-8.49-12.79h4.26L0 5.41v2.14l10.52 5.26zm34.11 12.78h-4.26l14.83 7.43v-2.14l-10.57-5.29z"/>
        </svg>
      </button>
    </div>
  `;

  catchMouseEvent();

  const elRefs1 = findElAndAddEventListener();

  elRefs1.ukrainianLangBtn.classList.add("active-language");
  elRefs1.englishLangBtn.classList.remove("active-language");
}

function changeActiveLangBtn (event){
  const clickedButton = event.target.closest('.language-button');

  const elRefs0 = findElAndAddEventListener();

  if (clickedButton === elRefs0.englishLangBtn && !elRefs0.englishLangBtn.classList.contains("active-language")) {
    console.log("Clicked on English button");

    renderEngLangBtn();

  } else if (clickedButton === elRefs0.ukrainianLangBtn && !elRefs0.ukrainianLangBtn.classList.contains("active-language")) {
    console.log("Clicked on Ukrainian button");

    elRefs0.ukrainianLangBtn.classList.add("active-language");
    elRefs0.englishLangBtn.classList.remove("active-language");

    renderUkrLangBtn();
  }

  const refs1 = findElAndAddEventListener();

  refs1.englishLangBtn.addEventListener("click", changeActiveLangBtn);
  refs1.ukrainianLangBtn.addEventListener("click", changeActiveLangBtn);
}

catchMouseEvent();

const refs1 = findElAndAddEventListener();

refs1.englishLangBtn.addEventListener("click", changeActiveLangBtn);
refs1.ukrainianLangBtn.addEventListener("click", changeActiveLangBtn);