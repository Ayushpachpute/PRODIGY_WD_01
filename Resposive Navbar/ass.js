const toggle_button = document.querySelector(".toggle_button");
const toggle_buttonicon = document.querySelector(".toggle_button i");
const dropdown = document.querySelector(".dropdown");

toggle_button.onclick = function () {
  dropdown.classList.toggle("open");
  const isOpen = dropdown.classList.contains("open");

  toggle_buttonicon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";
};

