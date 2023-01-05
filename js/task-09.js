const refs = {
  body: document.body,
  spanEl: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
};

refs.button.addEventListener("click", onButton);

function onButton(event) {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.spanEl.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
