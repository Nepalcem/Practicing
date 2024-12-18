const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", flipColors);

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

function flipColors() {
  let hexColor = "#";
  for (let i = 0; i < 6; i += 1) {
    const number = getRandomNumber();
    hexColor += hex[number];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
}
