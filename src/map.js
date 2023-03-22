const googleMapContainer = document.querySelector(".map__google-map-container")
const googleMap = document.querySelector(".map__google-map")


const mapBtn1 = document.querySelector(".map-btn-1")
const mapBtn2  = document.querySelector(".map-btn-2")
const mapBtn3  = document.querySelector(".map-btn-3")
const mapBtn4  = document.querySelector(".map-btn-4")
const mapBtn5  = document.querySelector(".map-btn-5")


mapBtn1.addEventListener("click", () => {
  googleMap.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10422.749943793107!2d28.41626363955079!3d49.225453599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5be40fd68679%3A0x1386973d939d74eb!2z0KXRltC80YfQuNGB0YLQutCwIC0g0L_RgNCw0LvRjNC90Y8gQUtTSSDQv9GA0LjQudC80LDQu9GM0L3QuNC5INC_0YPQvdC60YI!5e0!3m2!1suk!2sua!4v1679515018321!5m2!1suk!2sua"
});

mapBtn2.addEventListener("click", () => {
  googleMap.src=""
});

mapBtn3.addEventListener("click", () => {
  console.log("Button was clicked");
});

mapBtn4.addEventListener("click", () => {
  console.log("Button was clicked");
});

mapBtn5.addEventListener("click", () => {
  console.log("Button was clicked");
});