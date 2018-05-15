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
guessesLeft = 10; //Number of tries a player has to guess the word 
previousGuesses = []; //Letters already guessed
answerArray = []; //The dashes and letters guessed
winNumber = []; //Number of Wins 

// Chooses a Word from Array
var chosenWord = words[Math.floor(Math.random() * words.length)]
console.log(chosenWord);

// Sets up Number of Blanks Needed
var numberOfBlanks = chosenWord.length;
console.log(numberOfBlanks);

for (var i = 0; i < numberOfBlanks; i++) {
    answerArray.push("_");
    // console.log(answerArray);
}

var currentWordState = "";

for (var i = 0; i < answerArray.length; i++) {
    currentWordState += answerArray[i] + " ";

}


document.getElementById("currentWord").innerHTML = currentWordState;

// answerArray;