// Lista de URLs de imagens aleatórias
const images = [
    'images/backgroudimage1.png',
    'images/backgroudimage2.png',
    'images/backgroudimage3.png',
    'images/backgroudimage4.png',
    'images/backgroudimage5.png',
    'images/backgroudimage6.png',
    'images/backgroudimage7.png',
    'images/backgroudimage8.png',
    'images/backgroudimage9.png',
    'images/backgroudimage10.png',
    'images/backgroudimage11.png',
    'images/backgroudimage12.png',
    'images/backgroudimage13.png',
    'images/backgroudimage14.png',
    'images/backgroudimage15.png',
    'images/backgroudimage16.png',
    'images/backgroudimage17.png',
    'images/backgroudimage18.png',
    'images/backgroudimage19.png',
    'images/backgroudimage20.png',
    'images/backgroudimage21.png',
    'images/backgroudimage22.png',
    'images/backgroudimage23.png',
    'images/backgroudimage24.png',
    'images/backgroudimage25.png',
    'images/backgroudimage26.png',
    'images/backgroudimage27.png',
    'images/backgroudimage28.png',
    'images/backgroudimage29.png',
    'images/backgroudimage30.png',
    'images/backgroudimage31.png',
    'images/backgroudimage32.png',
    'images/backgroudimage33.png',
    'images/backgroudimage34.png',
    'images/backgroudimage35.png',
    'images/backgroudimage36.png',
    'images/backgroudimage37.png',
    
];

// Selecionar uma imagem aleatória
function setRandomBackground() {
    const randomIndex = Math.floor(Math.random() * images.length);
    document.body.style.backgroundImage = `url(${images[randomIndex]})`;
}

// Funções da calculadora
function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendCharacter(char) {
    document.getElementById('display').value += char;
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
// Função para usar o teclado para interagir com a calculadora
document.addEventListener('keydown', (e) => {
    const display = document.getElementById('display');
    if (e.key >= '0' && e.key <= '9') appendCharacter(e.key);
    if (['+', '-', '*', '/'].includes(e.key)) appendCharacter(e.key);
    if (e.key === 'Enter') calculate();
    if (e.key === 'Backspace') deleteLast();
    if (e.key === 'Escape') clearDisplay();
    if (e.key === '.') appendCharacter('.');
});


// Chamar a função para definir o fundo quando a página carregar
window.onload = () => {
    setRandomBackground();
    const draggableContainer = document.getElementById('draggable-container');
    makeDraggable(draggableContainer);
};