const ref = {
  input: document.querySelector("input"),
  buttonElCreate: document.querySelector("button[data-create]"),
  buttonElDestroy: document.querySelector("button[data-destroy]"),
  divEl: document.querySelector("#boxes"),
};
let amount = 0;
const createBoxElement = (size, color) =>
  `<div style="height: ${size}px; width: ${size}px; background: ${color}"></div>`;

ref.input.addEventListener("input", (eventIn) => {
  amount = eventIn.currentTarget.value;
});

ref.buttonElCreate.addEventListener("click", () => {
  createBoxes(amount);
});
let size = 30;
function createBoxes(amountEl) {
  const boxes = [];
  for (let i = 0; i < amountEl; i += 1) {
    const color = getRandomHexColor();
    const element = createBoxElement(size, color);
    boxes.push(element);
    size += 10;
  }
  ref.divEl.insertAdjacentHTML("beforeend", boxes.join(""));
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function removAllElements() {
  ref.divEl.innerHTML = "";
}

ref.buttonElDestroy.addEventListener("click", () => {
  removAllElements();
});
