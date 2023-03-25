const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingrList = document.querySelectorAll(".ingredients");
console.log(ingrList)
for (i = 0; i < ingredients.length; i += 1) {
  const list= document.createElement("li")
  list.textContent = ingredients[i]
  document.body.children[7].append(list)
  console.log(list)
}
console.log(document.body)