const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElement = document.querySelector("#ingredients");

const liElements = ingredients.map((ingredient) => {
  const newLi = document.createElement("li");
  newLi.textContent = ingredient;
  newLi.classList = "item";
  return newLi;
});
ulElement.append(...liElements);
