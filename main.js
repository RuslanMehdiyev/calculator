let display = document.querySelector("#display");
let result = document.getElementsByClassName("result");
let operators = document.querySelectorAll(".btn-success");
let numbers = document.querySelectorAll(".btn-primary");
let evaluate = document.querySelector(".btn-danger");
let clearBtn = document.querySelector("#clear");
let removeLast = document.querySelector("#removeLast");

numbers.forEach((e) => {
  e.addEventListener("click", () => {
    if (
      display.innerText.startsWith("0") &&
      display.innerText.charAt(1) != "."
    ) {
      display.innerText = display.innerText.slice(0, -1) + e.innerText;
    } else {
      display.innerText += e.innerText;
    }
  });
});

operators.forEach((e) => {
  e.addEventListener("click", () => {
    let lastEl = display.innerText[display.innerText.length - 1];
    if (!isNaN(lastEl) && display.innerText.length > 0) {
      display.innerText += e.innerText;
    } else if (display.innerText.length > 0) {
      display.innerText = display.innerText.slice(0, -1) + e.innerText;
    }
  });
});

evaluate.addEventListener("click", () => {
  if (display.innerHTML.length == 0) {
    result.innerHTML = "Empty";
  } else if (isNaN(display.innerText.charAt(display.innerText.length - 1))) {
    display.innerText = display.innerText.slice(0, -1);
    result.innerText = eval(display.innerText);
  } else {
    result.innerText = eval(display.innerText);
  }
  if (result.innerText % 1 != 0) {
    result.innerText = eval(Number(result.innerText).toFixed(5));
  }
  display.innerText = result.innerText;
});

clearBtn.addEventListener("click", () => {
  result.innerText = "";
  display.innerText = "";
});

removeLast.addEventListener("click", () => {
  display.innerText = display.innerText.slice(0, -1);
});
