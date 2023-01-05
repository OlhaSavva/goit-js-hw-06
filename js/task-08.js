const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElement = event.currentTarget.elements;
  if (formElement.email.value === "" && formElement.password.value === "") {
    alert("Все поля должны быть заполненны");
  } else {
    const mail = formElement.email.value;
    const password = formElement.password.value;

    const formData = {
      mail,
      password,
    };
    console.log(formData);
    event.currentTarget.reset();
  }
}
