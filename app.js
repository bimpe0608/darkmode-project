const darkModeButton = document.querySelector("body > button");
const body = document.querySelector("body");

let darkMode = false;

console.log(darkModeButton, body);

const buttonCLickHandler = () => {
  darkMode = !darkMode;

  if (darkMode) {
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "all 0.3s ease-in-out";
    darkModeButton.innerHTML = "Change to light mode";
  } else {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "all 0.3s ease-in-out";
    darkModeButton.innerHTML = "Change to dark mode";
  }
};

