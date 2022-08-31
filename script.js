//Exercicio 1
const positionBody = document.body;
const createTitle = document.createElement('h1');
createTitle.innerHTML = 'Paleta de Cores';
createTitle.id = 'title';
positionBody.appendChild(createTitle);

//Exercicio 2 e Exercicio 3

const title = document.querySelector('#title');

function colorPalette() {
  const createColor = document.createElement('id');
  createColor.id = 'color-palette';
  positionBody.appendChild(createColor);
  positionCreaterColor = document.getElementById('color-palette');

  const cores = ['black', 'green', 'red', 'yellow'];

  for (let index = 0; index < cores.length; index += 1) {
    const square = document.createElement('class');
    square.className = 'color';
    square.style.backgroundColor = cores[index];
    positionCreaterColor.appendChild(square);
    square.style.border = 'solid black 1px';
  }
}
colorPalette();

//Exercico 4
