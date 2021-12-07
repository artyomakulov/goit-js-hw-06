function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const colorChangeButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

const changeColor = () => {
  document.body.style.background = getRandomHexColor();
}
const changeColorSpan = () => {
  colorSpan.textContent = getRandomHexColor();
}

colorChangeButton.addEventListener('click', changeColor);
colorChangeButton.addEventListener('click', changeColorSpan);