// const numOfCat = document.querySelectorAll("li.item");
// console.log(`Number of categories: ${numOfCat.length}`);

// const nameOfFirstCat = document.body.children[6].firstElementChild.childNodes[1].innerText;
// console.log(`Category: ${nameOfFirstCat}`);
// const firstElemLen = document.body.children[6].firstElementChild.childNodes[1].nextElementSibling.children;
// console.log(`Elements: ${firstElemLen.length}`);

// const nameOfSecondCat = document.body.children[6].children[1].childNodes[1].innerText;
// console.log(`Category: ${nameOfSecondCat}`);
// const secondElemLen = document.body.children[6].children[1].childNodes[1].nextElementSibling.children;
// console.log(`Elements: ${secondElemLen.length}`);

// const nameOfThirdCat = document.body.children[6].lastElementChild.childNodes[1].innerText;
// console.log(`Category: ${nameOfThirdCat}`);
// const thirdElemLen = document.body.children[6].lastElementChild.childNodes[1].nextElementSibling.children;
// console.log(`Elements: ${thirdElemLen.length}`);

const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
