const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const textInput = document.querySelector("#letter");
const wordInProgess = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingSpan = document.querySelector(".remaining span");
const messageParagraph = document.querySelector(".message");
const playButton = document.querySelector(".play-again");
const word = "magnolia";
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
    const guess = textInput.value;
    console.log(guess);
    textInput.value = "";
});