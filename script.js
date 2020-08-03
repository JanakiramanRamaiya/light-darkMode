const toogleSwitch = document.querySelector("#theme-switch-checkbox");
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

function setImage(mode) {
  image1.src = `img/undraw_proud_coder_${mode}.svg`;
  image2.src = `img/undraw_feeling_proud_${mode}.svg`;
  image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
}
function darkMode() {
  nav.style.backgroundColor = "rgb( 0 0 0/50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 /50%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  //   toggleIcon.children[1].classList.add("fa-moon");
  setImage("dark");
  localStorage.setItem("theme", "dark");
}
function lightMode() {
  nav.style.backgroundColor = "rgb( 255 255 255/50%)";
  textBox.style.backgroundColor = "rgb(0 0 0 /50%)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  //   toggleIcon.children[1].classList.add("fa-sun");
  //   image1.src = "img/undraw_proud_coder_light.svg";
  //   image2.src = "img/undraw_feeling_proud_light.svg";
  //   image3.src = "img/undraw_conceptual_idea_light.svg";
  setImage("light");
  localStorage.setItem("theme", "light");
}
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light1.....");
    lightMode();
  }
}

toogleSwitch.addEventListener("change", switchTheme);

let currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  console.log(currentTheme, "jaan");
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    darkMode();
    toogleSwitch.checked = true;
  } else {
    lightMode();
    toogleSwitch.checked = false;
  }
}
