/* Logic of the hangman game:
 - At the beginning, a word has been randomly chosen (guessWord)
 - The field where the word should be hidden is filled with elements, depending on the characters of the chosen word (function hiddenWordCreation)
 - A new array of all those elements is created (variable hiddenWord), with the same length as the guessWord
 - When a letter is clicked, the program compares that letter to each letter of the chosen word (function letterCheck)
 - If there is a letter match, the text in the element of the array hiddenWord will be replaced with the letter, and that letter will be counted
 - If there is not a match, that "absence" of the letter is also counted (missedLetter)
 - If there are as many letters matched as there are letters in the guessWord, the game is won
 - If a letter does not match any of the letters of the guessWord, missedLetter will be equal to the number of characters in the word, which means a life should be taken (function lifeTaker) and part of the sketch should be drawn (function sketchDrawer)
 - If all lives are taken, the game is lost
 - A hint is shown at the press of the "Hint" button
 - The variables (the game) are restarted after clicking the "Play again" button, and a new word is created

   Added features/restrictions:
 - Each letter button is disabled after clicking it (whether it's a guess or not)
 - All of the buttons are disabled when the game is won or lost (function buttonDisabler)
 - All of the buttons are reenabled if the game is restarted (function buttonEnabler)
*/

let guessWords = ["saint john's", "nassau", "bridgetown", "belmopan", "ottawa", "san jose", "havana", "roseau", "santo domingo", "san salvador", "saint george's", "guatemala city", "port-au-prince", "tegucigalpa", "kingston", "mexico city", "managua", "panama city", "basseterre", "castries", "kingstown", "port of spain", "washington, d.c."];
let hints = ["Antigua and Barbuda", "Bahamas", "Barbados", "Belize", "Canada", "Costa Rica", "Cuba", "Dominica", "Dominican Republic", "El Salvador", "Grenada", "Guatemala", "Haiti", "Honduras", "Jamaica", "Mexico", "Nicaragua", "Panama", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Trinidad and Tobago", "United States of America"];

let letterButtons = document.getElementsByClassName("alphabet");
let wordField = document.getElementById("guessing-container");
let livesLeft = document.getElementById("lives-left");
let hintField = document.getElementById("hint-filler");
let bodyParts = document.getElementById("sketch-container").children;
let hintButton = document.getElementById("hint");
let playAgainButton = document.getElementById("play-again");
let randomIndex = Math.floor(Math.random() * (22 - 0 + 1) + 0); // Math.floor(Math.random() * (max - min + 1) + min)
let guessWord = guessWords[randomIndex];
let lifeCounter = 10;
let guessedLetter = 0; // how many letters from the word are guessed
let missedLetter = 0; // how many letters from the word don't match the clicked letter
let hiddenWord; // an array of all the hidden letters to be guessed
livesLeft.innerText = "You have 10 lives left.";

function hiddenSketch (sketchParts) {
    for (let i = 0; i < sketchParts.length; i++) {
        sketchParts[i].style.visibility = "hidden";
    }
}

function hiddenWordCreation (word) {
    for (let i = 0; i < word.length; i++) {
        let individualLetter = word.charCodeAt(i);
        
        if (97 <= individualLetter && individualLetter <= 122) { // for letters, print "_"
            wordField.innerHTML += "<span class='hiddenLetters'> _ </span>";
        }
        else if (individualLetter === 32) { // for empty space, print " "
            wordField.innerHTML += `<span class='hiddenLetters'>&nbsp;</span>`;
            guessedLetter++; // when button letters are matched with letters from the guessWord, nothing will match the empty space or the special characters (if present in the word), so guessedLetter will never be equal to guessWord.length, and we'll never get the message "You won!"
        }
        else { // for other characters than letters, print the character
            wordField.innerHTML += `<span class='hiddenLetters'>${word[i]}</span>`;
            guessedLetter++;
        }
    }
}

function letterCheck (button) {
    for (let i = 0; i < guessWord.length; i++) {
        if (button.innerText === guessWord[i]) {
            hiddenWord[i].innerText = button.innerText.toUpperCase();
            guessedLetter++;
        }
        else {
            missedLetter++;
        }
    }
}

function sketchDrawer (leftoverLives) {
    switch (leftoverLives) {
        case 9:
            bodyParts[0].style.visibility = "visible";
            break;
        case 8: 
            bodyParts[1].style.visibility = "visible";
            break;
        case 7: 
            bodyParts[2].style.visibility = "visible";
            break;   
        case 6: 
            bodyParts[3].style.visibility = "visible";
            break;  
        case 5: 
            bodyParts[4].style.visibility = "visible";
            break; 
        case 4: 
            bodyParts[5].style.visibility = "visible";
            break; 
        case 3: 
            bodyParts[6].style.visibility = "visible";
            break; 
        case 2: 
            bodyParts[7].style.visibility = "visible";
            break; 
    }
}

function lifeTaker (leftoverLives) {
    if (leftoverLives === 0) {  // draw the last body part when you lose
        livesLeft.innerText = "You lost!";
        bodyParts[9].style.visibility = "visible"; 
        buttonDisabler(letterButtons); // nothing should be clickable after the game is lost
    }
    else if (leftoverLives === 1) { // separate so that we don't have "You have 1 lives left" 
        livesLeft.innerText = `You have ${leftoverLives} life left.`;
        bodyParts[8].style.visibility = "visible";
    }
    else { // draw everything until you have 1 life left     
        livesLeft.innerText = `You have ${leftoverLives} lives left.`;
        sketchDrawer(leftoverLives);
    }
}

function buttonDisabler (buttonArray) {
    for (let i = 0; i < buttonArray.length; i++) {
        buttonArray[i].style.pointerEvents = "none";
    }
}

function buttonEnabler (buttonArray) {
    for (let i = 0; i < buttonArray.length; i++) {
        buttonArray[i].style.pointerEvents = "auto";
        buttonArray[i].style.backgroundColor = "white";
    }
}

hiddenWordCreation(guessWord);
hiddenSketch(bodyParts);
hiddenWord = document.getElementsByClassName("hiddenLetters");

for (let i = 0; i < letterButtons.length; i++) {
    letterButtons[i].addEventListener("click", function() {
        missedLetter = 0; // initialized here again, so that the counter doesn't continue counting from the previously clicked letter

        letterCheck (letterButtons[i]);

        if (guessedLetter === guessWord.length) {
            livesLeft.innerText = "You won!";
            buttonDisabler(letterButtons); // nothing should be clickable after the game is won
        }

        if (missedLetter === guessWord.length) {
            lifeCounter--;
            lifeTaker(lifeCounter);
        }

        letterButtons[i].style.pointerEvents = "none"; // disable a letter after it's clicked
        letterButtons[i].style.backgroundColor = "rgb(214, 213, 213)";
    })
}

hintButton.addEventListener("click", function() {
    hintField.innerText = `The capital of ${hints[randomIndex]}`;
})

playAgainButton.addEventListener("click", function () {
    randomIndex = Math.floor(Math.random() * (22 - 0 + 1) + 0);
    guessWord = guessWords[randomIndex];
    lifeCounter = 10;
    missedLetter = 0;
    guessedLetter = 0;
    livesLeft.innerText = "You have 10 lives left.";
    hintField.innerText = "";
    wordField.innerHTML = "";
    hiddenWordCreation(guessWord);
    hiddenSketch(bodyParts);
    buttonEnabler(letterButtons);
})
