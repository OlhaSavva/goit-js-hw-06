const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElement = document.querySelector("#ingredients");
console.log(ulElement);

function createElement(text) {
  const newLi = document.createElement("li");
  const newContent = document.createTextNode(text);

  newLi.appendChild(newContent);
  return newLi;
}
const liElements = ingredients.map((ingredient) => {
  return createElement(ingredient);
});
console.log(liElements);
