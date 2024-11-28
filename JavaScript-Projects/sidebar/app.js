const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

// toggleBtn.addEventListener("click", function () {
//   //   links.classList.contains("show-links")
//   //     ? links.classList.remove("show-links")
//   //     : links.classList.add("show-links");
//   sidebar.classList.toggle("show-sidebar");
// });

toggleBtn.addEventListener("click", classToggle);
closeBtn.addEventListener("click", classToggle);

function classToggle() {
  sidebar.classList.toggle("show-sidebar");
}
