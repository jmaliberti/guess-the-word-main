const guessedLettersList = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const wordInProgess = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingSpan = document.querySelector(".remaining span");
const messageParagraph = document.querySelector(".message");
const playButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];
//test variables!
//console.log(textInput); tested all variables!

const pendingLetters = function (word) {
    const letterList = [];
    for (const letter of word) {
        console.log(letter);
        letterList.push("●");
    }
    wordInProgess.innerText = (letterList.join(""));
};
//^^By adding "word" to the function's parameters, 
//you are using "magnolia" as the source of information.
//The letterList array is empty in order to hold the circles as they come up.
//Using push() forces the circles into the array for display,
//and the "letter" (could be any word) being "of" magnolia, 
//means it's pulling from the word for info, i.e. breaking it down to the letters.

pendingLetters(word);


guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    messageParagraph.innerText = "";
    const guess = textInput.value;
    const goodGuess = validate(guess);
    //console.log(goodGuess);
    if (goodGuess) {
        makeGuess(guess);
      }
});

const validate = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    //if empty
    if (input.length === 0) {
        messageParagraph.innerText = "Nothing there!"; 
    }
    //if not a letter
    else if (!input.match(acceptedLetter)) {
        messageParagraph.innerText = "Not a letter!";
    }
    //if too many
    else if (input.length > 1) {
        messageParagraph.innerText = "Too many letters!";
    }
    //if good
    else {
        return textInput;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        messageParagraph.innerText = "Repeated letter, try again!";
    }
    else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
};