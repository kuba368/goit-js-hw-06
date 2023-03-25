let counterValue = 0;
const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');
const val = document.querySelector("#value");

const increaseValue = (inc) => {
  counterValue += 1;
  val.textContent = counterValue;
};
incBtn.addEventListener("click", increaseValue);

const decreaseValue = (inc) => {
  counterValue -= 1;
  val.textContent = counterValue;
};
decBtn.addEventListener("click", decreaseValue);
