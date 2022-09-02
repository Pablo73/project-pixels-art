const positionBody = document.body;

function createHTML(tag, text, elemento) {
  const create = document.createElement(tag);
  positionBody.appendChild(create);
  create.innerText = text;
  create.id = elemento;
  create.style.width = '230px';
  create.style.height = '80px';

}
createHTML('h1', 'Paleta de Cores', 'title');
createHTML('id', '', 'color-palette');
createHTML('button', 'Cores aleatórias', 'button-random-color');
createHTML('div', '', 'pixel-board');

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
  create.className = tipo;
  create.style.border = 'solid black 1px';
  create.style.width = '80px';
  create.style.height = '80px';
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
