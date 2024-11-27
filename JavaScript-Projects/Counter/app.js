//set initial count value;
let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

const updateDisplay = () => {
  value.textContent = count;
  value.style.color = count > 0 ? "green" : count < 0 ? "red" : "#222";
};

const handleClick = (action) => {
  if (action === "decrease") count--;
  else if (action === "increase") count++;
  else count = 0;
  updateDisplay();
};

btns.forEach((btn) => {
  btn.addEventListener("click", ({ currentTarget }) => {
    const action = currentTarget.classList.contains("decrease")
      ? "decrease"
      : currentTarget.classList.contains("increase")
      ? "increase"
      : "reset";
    handleClick(action);
  });
});
// btns.forEach(function (item) {
//   item.addEventListener("click", function (event) {
//     const styles = event.currentTarget.classList;
//     if (styles.contains("decrease")) {
//       count -= 1;
//     } else if (styles.contains("increase")) {
//       count += 1;
//     } else {
//       count = 0;
//     }
//     if (count > 0) {
//       value.style.color = "green";
//     }
//     if (count < 0) {
//       value.style.color = "red";
//     }
//     if (count === 0) {
//       value.style.color = "#222";
//     }
//     value.textContent = count;
//   });
// });
