const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (e) => {
  if (
    e.currentTarget.value.trim().length ===
    Number(e.currentTarget.dataset.length)
  ) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
