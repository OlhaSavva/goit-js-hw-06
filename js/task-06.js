const refInput = document.querySelector("#validation-input");

refInput.addEventListener("blur", onInputBlur);
const attribute = refInput.getAttribute("data-length");

function onInputBlur(event) {
  if (event.currentTarget.value.length === +attribute) {
    refInput.classList.remove("invalid");
    refInput.classList.add("valid");
  } else {
    refInput.classList.add("invalid");
    refInput.classList.replace("valid", "invalid");
  }
}
