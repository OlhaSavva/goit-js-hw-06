const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", onInput);

function onInput(event) {
  const fontSize = event.currentTarget.value + "px";
  spanEl.style.fontSize = fontSize;
}
