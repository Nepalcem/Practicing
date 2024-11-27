const rollBtn = document.getElementById("spin");
const container = document.querySelector(".container");
const values = document.querySelectorAll(".value");
const message = document.querySelector(".message");

function getRandomNumber() {
  return Math.floor(Math.random() * values.length);
}

function applyValues(array) {
  array.forEach((element) => {
    element.textContent = getRandomNumber();
  });
}

rollBtn.addEventListener("click", function () {
  applyValues(values);
  const valuesArr = Array.from(values).map((el) => el.textContent);
  if (valuesArr.every((el) => el === valuesArr[0])) {
    container.style.backgroundColor = "green";
    message.textContent = "You won! Congrats!";
  } else {
    container.style.backgroundColor = "red";
    message.textContent = "You lose try one more time!";
  }
});
