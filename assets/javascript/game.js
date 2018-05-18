// List of Harry Potter Spells to Choose
var words = [
    "accio",
    "aguamenti",
    "alohomora",
    "crucio",
    "episkey",
    "lumos",
    "diffindo",
    "evanesco",
    "expelliarmus",
    "imperio",
    "nox",
    "incendio",
    "levicorpus",
    "mosmordre",
    "obliviate",
    "portus",
    "reducto",
    "reparo",
    "riddikulus",
    "rictusempra",
    "scourgify",
    "stupefy",
]
// Sets Game Variables
var guessesLeft = 10; //Number of tries a player has to guess the word 
var previousGuesses = []; //Letters already guessed
var answerArray = []; //The dashes and letters guessed
var winNumber = 0; //Number of Wins 
var chosenWord;
var wordSpace = document.getElementById("currentWord");
var letterGuesses = document.getElementById("previousGuesses");
var guessesRemaining = document.getElementById("numberOfGuessesLeft");
var winCount = document.getElementById("numberOfWins");
var alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
// Chooses a Word from Array

// 
function startNewGame() {
    answerArray = [];
    previousGuesses = [];
    guessesLeft = 10;

    chosenWord = words[Math.floor(Math.random() * words.length)]
    console.log(chosenWord);

    // Sets up Number of Blanks Neede

    for (var i = 0; i < chosenWord.length; i++) {
        answerArray.push("_");
        console.log(answerArray);
        wordSpace.innerHTML = answerArray.join(" ");
    }

    letterGuesses.innerHTML = "Previous Guesses: " + previousGuesses;
    guessesRemaining.innerHTML = "Number of Guesses: " + guessesLeft;
    
}

function updateWords(letter) {
    if (chosenWord.indexOf(letter) === -1 && alphabet.indexOf(letter) >= 0) {
        previousGuesses.push(letter);
        letterGuesses.innerHTML = "Previous Guesses: " + previousGuesses.join(", ");
        guessesLeft--;
        guessesRemaining.innerHTML = "Number of Guesses: " + guessesLeft;
    } else if (chosenWord.indexOf(letter) >= 0 && alphabet.indexOf(letter) >= 0) {
        for (var i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === letter) {
                answerArray[i] = letter;
            }
            wordSpace.innerHTML = answerArray.join(" ")
        }
    }

}

function youWon () {
    winNumber++;
    winCount.innerHTML = "Number of Wins: " + winNumber;

}

function didYouWin() {
    if (answerArray.indexOf("_") === -1) {
        alert("You're a word wizard!");
        youWon();
        startNewGame();
    } else if (guessesLeft === 0) {
        alert("You've lost, old friend!");
        startNewGame();
    }

}

// Whenever a key is pressed
document.onkeyup = function (event) {
    var humanInput = event.key;
    updateWords(humanInput);
    didYouWin();
    console.log(humanInput);
}

window.onload = startNewGame();
