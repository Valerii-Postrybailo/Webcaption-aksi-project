const googleMap = document.querySelector(".map__google-map");

const mapBtn1 = document.querySelector(".map-btn-1");
const mapBtn2 = document.querySelector(".map-btn-2");
const mapBtn3 = document.querySelector(".map-btn-3");
const mapBtn4 = document.querySelector(".map-btn-4");
const mapBtn5 = document.querySelector(".map-btn-5");

const address = document.querySelector(".address-text");

const workingHours1 = document.querySelector(".first-working-time");
const workingHours2 = document.querySelector(".second-working-time");

const phoneNumbers = document.querySelector(".location-box__phone-number-box")

let activeBtn = mapBtn3;

const activeToggle = (el) => {
  if (activeBtn) {
    activeBtn.classList.remove('address-btn--active');
  }
  el.classList.add('address-btn--active');
  activeBtn = el;
}

mapBtn1.addEventListener("click", () => {
  googleMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10422.749943793107!2d28.41626363955079!3d49.225453599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5be40fd68679%3A0x1386973d939d74eb!2z0KXRltC80YfQuNGB0YLQutCwIC0g0L_RgNCw0LvRjNC90Y8gQUtTSSDQv9GA0LjQudC80LDQu9GM0L3QuNC5INC_0YPQvdC60YI!5e0!3m2!1suk!2sua!4v1679515018321!5m2!1suk!2sua";
  activeToggle(mapBtn1);

  address.textContent = "Вінниця, вул. Родіона Скалецького, 7";
  address.href = "https://bit.ly/3Zdw8lc";
  
  workingHours1.innerHTML = `<span class="location-box__address-block-data">ПН - ПТ</span>10:00–20:00`;
  workingHours2.innerHTML = `<span class="location-box__address-block-data ">СБ - НД</span>10:00–16:00`;
  
  phoneNumbers.innerHTML = `
    <a class="location-box__address-block-text first-phone-number" href="tel:+38 (063) 291-39-11">
      +38 (063) 291-39-09
    </a>`;
});

mapBtn2.addEventListener("click", () => {
  googleMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.5741176673873!2d28.403158515927043!3d49.227603382592314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5c43674bd913%3A0xbc0d2bf528d7f9f2!2z0LLRg9C70LjRhtGPINCS0L7Rl9C90ZbQsi3QhtC90YLQtdGA0L3QsNGG0ZbQvtC90LDQu9GW0YHRgtGW0LIsIDE00LAsINCS0ZbQvdC90LjRhtGPLCDQktGW0L3QvdC40YbRjNC60LAg0L7QsdC70LDRgdGC0YwsIDIxMDAw!5e0!3m2!1suk!2sua!4v1679565894500!5m2!1suk!2sua";
  activeToggle(mapBtn2);

  address.textContent = "Вінниця, вул. Воїнів-інтернаціоналістів, 14A";
  address.href = "https://bit.ly/40wrEr1";
  workingHours1.innerHTML = ``;
  workingHours2.innerHTML = ``;
  
  phoneNumbers.innerHTML = ``;
});

mapBtn3.addEventListener("click", () => {
  googleMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10421.345179964452!2d28.496456463716857!3d49.232112945808254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5b6a77922847%3A0xe9f11d7b1f81923d!2z0KXRltC80YfQuNGB0YLQutCwIEFLU0k!5e0!3m2!1suk!2sua!4v1679474269117!5m2!1suk!2sua";
  activeToggle(mapBtn3);

  address.textContent = "Вінниця, вул. Замостянська, 33";
  address.href = "https://bit.ly/406ZjI2";
  workingHours1.innerHTML = `<span class="location-box__address-block-data">ПН - ПТ</span>8:00–18:00`;
  workingHours2.innerHTML = `<span class="location-box__address-block-data ">СБ - НД</span>8/9:00–16:00`;

  phoneNumbers.innerHTML = `
    <a class="location-box__address-block-text first-phone-number" href="tel:+38 (063) 291-39-11">
      +38 (063) 291-39-11
    </a>

    <a class="location-box__address-block-text second-phone-number" href="tel:+38 (063) 291-39-11">
      +38 (097) 928-85-57
    </a>`;
});

mapBtn4.addEventListener("click", () => {
  googleMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20845.499887586215!2d28.398754179101562!3d49.225453599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5c65443fffff%3A0x69b379869e06200f!2z0KXRltC80YfQuNGB0YLQutCwIC0g0L_RgNCw0LvRjNC90Y8g0JDQmtCh0IYg0L_RgNC40LnQvNCw0LvRjNC90LjQuSDQv9GD0L3QutGC!5e0!3m2!1suk!2sua!4v1679566086479!5m2!1suk!2sua";
  activeToggle(mapBtn4);

  address.textContent = "Вінниця, вул. Келецька, 45а";
  address.href = "https://bit.ly/3lBPZNi";
  workingHours1.innerHTML = `<span class="location-box__address-block-data">ПН - ПТ</span>9:00–18:00`;
  workingHours2.innerHTML = `<span class="location-box__address-block-data ">СБ - НД</span>-/10:00–15:00`;
  
  phoneNumbers.innerHTML = `
    <a class="location-box__address-block-text first-phone-number" href="tel:+38 (063) 291-39-11">
      +38 (093) 239-05-91
    </a>`;
});

mapBtn5.addEventListener("click", () => {
  googleMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2615.865372240962!2d28.110768315922172!3d49.032167496408604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4732a2bd61403cf1%3A0xce30e1387b5213c3!2z0LLRg9C70LjRhtGPINCG0LLQsNC90LAg0KTRgNCw0L3QutCwLCAyLCDQltC80LXRgNC40L3QutCwLCDQktGW0L3QvdC40YbRjNC60LAg0L7QsdC70LDRgdGC0YwsIDIzMTAw!5e0!3m2!1suk!2sua!4v1679566301432!5m2!1suk!2sua";
  activeToggle(mapBtn5);

  address.textContent = "Жмеринка, вул. Франка, 2";
  address.href = "https://bit.ly/40Al9Ds";
  workingHours1.innerHTML = ``;
  workingHours2.innerHTML = ``;
  
  phoneNumbers.innerHTML = ``;
});