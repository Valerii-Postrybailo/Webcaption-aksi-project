const feedbackForm = document.querySelector(".user-communication-form");

feedbackForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { name, email,questions }
  } = event.currentTarget;

  if (name.value === "" || email.value === "" || questions.value === "") {
    return alert("Заповніть всі пусті поля!");
  }

  console.log(`Name: ${name.value}, Email: ${email.value}, Questions: ${questions.value}`);
  event.currentTarget.reset();
}