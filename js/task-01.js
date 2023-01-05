const itemsEl = document.querySelectorAll(".item");
console.log("Number of categories:", itemsEl.length);

itemsEl.forEach((element) => {
  const title = element.querySelector("h2").innerHTML;
  const elementsCount = element.querySelectorAll("ul li").length;
  console.log("Category:", title);
  console.log("Elements: ", elementsCount);
});
