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

function createClassColorHtmlCss(tipo) {
  const create = document.createElement('class');
  positionCreaterColor.appendChild(create);
  create.classList = tipo;
  create.style.border = 'solid black 1px';
  create.style.width = '40px';
  create.style.height = '40px';
  create.style.display = 'inLine-block';
  create.style.margin = '2px';
}

createClassColorHtmlCss('color');
createClassColorHtmlCss('color');
createClassColorHtmlCss('color');
createClassColorHtmlCss('color');

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

positionButton.addEventListener('click', function newCollor() {
    positionButton = localStorage.clear() 
    window.location.reload(true);
});

const bigSquare = document.createElement('div');
bigSquare.id = 'pixel-board';
bigSquare.style.width = '230px';
bigSquare.style.height = '230px';
positionBody.appendChild(bigSquare);

const positionSquare = document.getElementById('pixel-board');

function createClassSquareHtmlCss() {
  for (let index = 0; index < 25; index += 1) {
    const create = document.createElement('div');
    positionSquare.appendChild(create);
    create.classList = 'pixel';
    create.style.border = 'solid black 1px';
    create.style.backgroundColor = 'white';
    create.style.width = '40px';
    create.style.height = '40px';
    create.style.display = 'inLine-block';
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
  let collorSquare = document.getElementsByClassName('color')[index];
  collorSquare.addEventListener('click', clickElemento);
}

function paint(event) {
  const squareSelected = document.getElementsByClassName('selected')[0];
  event.target.style.backgroundColor = squareSelected.style.backgroundColor;
}

for (let index = 0; index < 25; index += 1) {
  let square = document.getElementsByClassName('pixel')[index];

  square.addEventListener('click', paint);
}
