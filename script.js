const positionBody = document.body;

function createHTML(tag, text, elemento, css) {
  const create = document.createElement(tag);
  positionBody.appendChild(create);
  create.innerText = text;
  create.id = elemento;
  create.style.display = css;
}
const cssInLineBlock = 'inLine-block';
createHTML('h1', 'Paleta de Cores', 'title');
createHTML('id', '', 'color-palette', 'block');
createHTML('button', 'Cores aleatórias', 'button-random-color', 'block');
createHTML('button', 'Limpar', 'clear-board', 'block');
createHTML('input', '', 'board-size', cssInLineBlock);
createHTML('button', 'VQV', 'generate-board', cssInLineBlock);

const positionCreaterColor = document.getElementById('color-palette');

function generateColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let index = 0; index < 6; index += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createClassColorHtmlCss(tipo) {
  const create = document.createElement('class');
  positionCreaterColor.appendChild(create);
  create.classList = tipo;
  create.style.border = 'solid black 1px';
  create.style.width = '40px';
  create.style.height = '40px';
  create.style.display = cssInLineBlock;
  create.style.margin = '2px';
}

createClassColorHtmlCss('color');
createClassColorHtmlCss('color');
createClassColorHtmlCss('color');
createClassColorHtmlCss('color');

const positionPaletteCores = document.getElementsByClassName('color');

const collor = ['black', generateColor(), generateColor(), generateColor()];

function storeData() {
  if (localStorage.colorPalette === undefined) {
    localStorage.setItem('colorPalette', JSON.stringify(collor));
  }
}
storeData();

function returnCollor() {
  const returnData = JSON.parse(localStorage.getItem('colorPalette'));
  for (let index = 0; index < 4; index += 1) {
    positionPaletteCores[index].style.backgroundColor = returnData[index];
  }
}
returnCollor();

let positionButtonRandomColor = document.querySelector('#button-random-color');

function newCollor() {
  positionButtonRandomColor = localStorage.clear();
  window.location.reload(true);
}
positionButtonRandomColor.addEventListener('click', newCollor);

let pixel = 5;

const bigSquare = document.createElement('div');
bigSquare.id = 'pixel-board';
bigSquare.style.width = '210px';
bigSquare.style.height = '210px';
positionBody.appendChild(bigSquare);

const positionSquare = document.getElementById('pixel-board');

// const tamanhoBigWidth = bigSquare.style.width;
// const tamanhoBigHeight = bigSquare.style.height;
// const tamnhaoWidth = tamanhoBigWidth.substring(0, 3);
// const tamnhaoHeigth = tamanhoBigHeight.substring(0, 3);

function createClassSquareHtmlCss() {
  for (let index = 0; index < pixel ** 2; index += 1) {
    const create = document.createElement('div');
    positionSquare.appendChild(create);
    create.classList = 'pixel';
    create.style.border = 'solid black 1px';
    create.style.backgroundColor = 'white';
    create.style.width = '40px';
    create.style.height = '40px';
    create.style.display = cssInLineBlock;
    create.style.margin = '0px';
  }
}
createClassSquareHtmlCss();

const elemento = document.getElementsByClassName('color')[0];
elemento.classList.add('selected');

function clickElemento(event) {
  const selected = document.getElementsByClassName('selected')[0];
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

for (let index = 0; index < 4; index += 1) {
  const collorSquare = document.getElementsByClassName('color')[index];
  collorSquare.addEventListener('click', clickElemento);
}

function paint(event) {
  const squareSelected = document.getElementsByClassName('selected')[0];
  const baz = event;
  baz.target.style.backgroundColor = squareSelected.style.backgroundColor;
}

for (let index = 0; index < pixel ** 2; index += 1) {
  const square = document.getElementsByClassName('pixel')[index];
  square.addEventListener('click', paint);
}

const positionButtonClear = document.querySelector('#clear-board');

function clear() {
  for (let index = 0; index < pixel ** 2; index += 1) {
    const squarePosition = document.getElementsByClassName('pixel')[index];
    squarePosition.style.backgroundColor = 'white';
  }
}
positionButtonClear.addEventListener('click', clear);

const positionInput = document.querySelector('#board-size');
positionInput.type = 'number';
positionInput.min = '1';

function alterar() {
  for (let index = 0; index < pixel ** 2; index += 1) {
    const squarePosition = document.getElementsByClassName('pixel')[0];
    squarePosition.parentNode.removeChild(squarePosition);
  }
  if (positionInput.value === '') {
    alert('Board inválido!');
  }
  if (positionInput.value >= 50) {
    positionInput.value = 50;
  }
  if (positionInput.value <= 5) {
    positionInput.value = 5;
  } else { pixel = positionInput.value;
  }
  bigSquare.style.width = (pixel * 40) + (pixel * 2) + 'px';
  bigSquare.style.height = (pixel * 40) + (pixel * 2) + 'px';
  createClassSquareHtmlCss();
}
document.getElementById('generate-board').addEventListener('click', alterar);

const color = [];

function saveColor() {
  color.length = 0;
  for (let index = 0; index < pixel ** 2; index += 1) {
    const selectedColor = document.getElementsByClassName('pixel')[index].style.backgroundColor;
    color.push(selectedColor);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(color));
}

for (let index = 0; index < pixel ** 2; index += 1) {
  document.querySelectorAll('.pixel')[index].addEventListener('click', saveColor);
}

if (localStorage.pixelBoard === undefined) {
  localStorage.setItem('pixelBoard', JSON.stringify(color));
}

const returnColor = JSON.parse(localStorage.getItem('pixelBoard'));

function priCollor() {
  for (let index = 0; index < pixel ** 2; index += 1) {
    document.getElementsByClassName('pixel')[index].style.backgroundColor = returnColor[index];
  }
}
priCollor();
