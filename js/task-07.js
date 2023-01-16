const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

spanEl.style.fontSize = inputEl.value;
inputEl.addEventListener("input", onInput);
function onInput(event) {
  spanEl.style.fontSize = event.currentTarget.value + "px";
}
