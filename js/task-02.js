const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingrList = document.querySelector("#ingredients");
console.log(ingrList);
for (let i = 0; i < ingredients.length; i += 1) {
  const list = document.createElement("li");
  list.textContent = ingredients[i];
  ingrList.append(list);
  console.log(list);
}
console.log(document.body);
