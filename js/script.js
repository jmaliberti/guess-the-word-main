const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const textInput = document.querySelector("#letter");
const wordMaking = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingSpan = document.querySelector(".remaining span");
const messageParagraph = document.querySelector(".message");
const playButton = document.querySelector(".play-again");
const word = "magnolia";
//test variables!
//console.log(textInput); tested all variables!

const pendingLetters = function (word) {
    wordMaking.innerText = "●";
    const letterList = [];
    console.log(letterList.join(""));
};

pendingLetters(word);


guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = textInput.value;
    console.log(guess);
    textInput.value = "";
});