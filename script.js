const positionBody = document.body;

function createHTML(tag, text, elemento) {
  const create = document.createElement(tag);
  positionBody.appendChild(create);
  create.innerText = text;
  create.id = elemento;
}
createHTML('h1', 'Paleta de Cores', 'title');
createHTML('id', '', 'color-palette');
createHTML('button', 'Cores aleatórias', 'button-random-color');

const positionCreaterColor = document.getElementById('color-palette');

function generateColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let index = 0; index < 6; index += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createClass(tipo) {
  const create = document.createElement('class');
  positionCreaterColor.appendChild(create);
  create.className = tipo;
  create.style.border = 'solid black 1px';
//   create.style.width = '80px';
//   create.style.height = '80px';
//   create.style.float = 'left';
//   create.style.margin = '2px';
}

createClass('color');
createClass('color');
createClass('color');
createClass('color');

const positionPaletteCores = document.getElementsByClassName('color');

const collor = ['black', generateColor(), generateColor(), generateColor()];

function storeData() {
  if (localStorage.length === 0) {
    localStorage.setItem('colorPalette', JSON.stringify(collor));
  }
}
storeData();

const returnData = JSON.parse(localStorage.getItem('colorPalette'));

function returnCollor() {
  for (let index = 0; index < 4; index += 1) {
    positionPaletteCores[index].style.backgroundColor = returnData[index];
  }
}
returnCollor();

let positionButton = document.querySelector('#button-random-color');

positionButton.addEventListener('click', function () {
    positionButton = localStorage.clear();
    window.location.reload(true);
});








// const cores = ['collor1', 'collor2', 'collor3', 'collor4'];
// const createColor = document.createElement('id');
// createColor.id = 'color-palette';
// positionBody.appendChild(createColor);
// const positionCreaterColor = document.getElementById('color-palette');

// function colorPalette() {
//   for (let index = 0; index < cores.length; index += 1) {
//     const square = document.createElement('class');
//     square.className = 'color';
//     if (index === 0) { square.style.backgroundColor = 'black';}
//     else { square.style.backgroundColor = generateColor(); }

//     positionCreaterColor.appendChild(square);
//     square.style.border = 'solid black 1px';
//     square.style.width = '80px';
//     square.style.height = '80px';
//     square.style.float = 'left';
//     square.style.margin = '2px';
//   }
// }
// colorPalette();

// const positionPaletteCores = document.getElementsByClassName('color');

// let storeData = ['black',
//   positionPaletteCores[1].style.backgroundColor,
//   positionPaletteCores[2].style.backgroundColor,
//   positionPaletteCores[3].style.backgroundColor];
// localStorage.setItem('colorPalette', JSON.stringify(storeData));

// let returnData = JSON.parse(localStorage.getItem('colorPalette'));

// function returnCollor() {
//   positionPaletteCores[1].style.backgroundColor = returnData[1];
//   positionPaletteCores[2].style.backgroundColor = returnData[2];
//   positionPaletteCores[3].style.backgroundColor = returnData[3];
// };

// console.log(positionPaletteCores[1].style.backgroundColor)

// function createButton() {
//   const button = document.createElement('button');
//   button.innerHTML = 'Cores aleatórias';
//   button.id = 'button-random-color';
//   positionBody.appendChild(button);
// }
// createButton();

// const positionButton = document.querySelector('#button-random-color');

// positionButton.addEventListener('click', function () { 
//     positionPaletteCores.replace = colorPalette()
// });
