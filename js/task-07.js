const changeFontSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

changeFontSize.addEventListener("input", (e) => {
  text.style.fontSize = `${e.currentTarget.value}px`;
});
