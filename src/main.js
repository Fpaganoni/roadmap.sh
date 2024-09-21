let text = document.querySelector("#textArea");

text.addEventListener("input", (e) => {
  let maxChar = 250;
  let textValue = text.value.length;
  let realCounter = document.querySelector(".real-counter");

  realCounter.innerHTML = e.target.value.length + "/250";

  if (textValue >= maxChar) {
    text.style.outlineColor = "#ca0000";
    text.style.border = "1px solid #ca0000";
    text.style.color = "#ca0000";
    realCounter.style.color = "#ca0000";
  } else {
    realCounter.style.color = "#252525";
    text.style.outlineColor = "#252525";
    text.style.border = "1px solid gray";
    text.style.color = "#252525";
  }
});
