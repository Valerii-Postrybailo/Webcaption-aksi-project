const feedbackForm = document.querySelectorAll(".user-communication-form");

feedbackForm.forEach((el) => el.addEventListener("submit", handleSubmit));

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { name, email,questions }
  } = event.currentTarget;

  if (name.value === "" || email.value === "" || questions.value === "") {
    let hash = window.location.hash;
    hash = hash.slice(1);
    if (hash === "en"){
      return alert("Complete all empty fields!");
    }else{
      return alert("Заповніть всі пусті поля!");
    }
  }

  console.log(`Name: ${name.value}, Email: ${email.value}, Questions: ${questions.value}`);
  event.currentTarget.reset();
}