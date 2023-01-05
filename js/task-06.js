const refInput = document.querySelector("#validation-input");

refInput.addEventListener("blur", onInputBlur);
const attribute = refInput.getAttribute("data-length");

function onInputBlur(event) {
  if (event.currentTarget.value.length === Number(attribute)) {
    refInput.classList.add("valid");
  } else {
    refInput.classList.remove("valid");
    refInput.classList.add("invalid");
  }
}
