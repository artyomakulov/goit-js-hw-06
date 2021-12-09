function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorChangeButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

const changeColor = () => {
  document.body.style.backgroundColor = colorSpan.textContent = getRandomHexColor();
}

colorChangeButton.addEventListener('click', changeColor);




// const changeColorSpan = () => {
//   colorSpan.textContent = getRandomHexColor();
// }
// colorChangeButton.addEventListener('click', changeColorSpan);





// const bodyEl = document.querySelector('body');
// const btnChangeColorel = document.querySelector('.change-color');
// const spanNameColorEl = document.querySelector('.color');

// btnChangeColorel.addEventListener('click', onBtnChangeColorel);

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;

// }
// function onBtnChangeColorel(event) {
//   bodyEl.style.backgroundColor = getRandomHexColor();
//   spanNameColorEl.textContent =  bodyEl.style.backgroundColor;
// }






// const Btn = document.querySelector('.change-color');
// const span = document.querySelector('.color');
// Btn.addEventListener('click', () => {
//   let colorBody = document.body.style.backgroundColor = getRandomHexColor();
//   span.textContent = colorBody;
// } )

