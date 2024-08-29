var palavra = ''; // Palavra
var wordInLines = ''; // Palavra para Lines
var userGuess = document.getElementById('guess'); // User input
var startGame = document.getElementById('start'); // Start-btn
var tryLetter = document.getElementById('try'); // User-Try Button
var wordLines = document.getElementById('wordLines'); // wordinLines
var start = false;

// ComeçaOGame
startGame.addEventListener('click', () => {
  wordInLines = '';
  start = true; // game=true,jogo começa

  getRandomWord().then((randomWord) => {
    palavra = randomWord;
    palavraToLines(palavra);
    showWord(); // showword with underscroes
  });
});

// userguess
tryLetter.addEventListener('click', () => {
  if (start) {
    let userGuessValue = userGuess.value;
    wordInLines = isWordTrue(palavra, wordInLines, userGuessValue);
    showWord(); // Update word
    userGuess.value = ''; // clearinputafterguess
  }
});

function palavraToLines(palavra) {
  for (let i = 0; i < palavra.length; i++) {
    wordInLines += '_';
  }
}

function isWordTrue(palavra, wordLines, userGuessValue) {
  let updateWordLines = '';

  for (let i = 0; i < palavra.length; i++) {
    if (userGuessValue === palavra[i]) {
      updateWordLines += userGuessValue;
    } else {
      updateWordLines += wordLines[i];
    }
  }
  return updateWordLines;
}

function showWord() {
  wordLines.innerText = wordInLines; // show word current state
}

// FetchRandomWord :))
function getRandomWord() {
  return fetch('https://api.dicionario-aberto.net/random')
    .then((response) => response.json())
    .then((data) => data.word);
}
