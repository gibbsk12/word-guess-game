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

// Starts a New Game

// Chooses a Word from Array
var chosenWord = words[Math.floor(Math.random() * words.length)]
console.log(chosenWord);

// Sets Game Variables
guessesLeft = 10;
wrongLetters = [];
answerArray = [];

// Sets up Number of Blanks Needed
var numberOfBlanks = chosenWord.length;
console.log(numberOfBlanks);

for (i = 0; i < numberOfBlanks; i++) {
    answerArray.push("_");
    console.log(answerArray); 
}
