const buttons = document.querySelectorAll("button");
const valueEl = document.querySelector("#value");
let counterValue = 0;

const handelChangeValue = (event) => {
  const button = event.target;
  if (button.dataset.action === "decrement") {
    counterValue -= 1;
  } else if (button.dataset.action === "increment") {
    counterValue += 1;
  }
  valueEl.textContent = counterValue;
};

buttons.forEach((button) => {
  button.addEventListener("click", handelChangeValue);
});
