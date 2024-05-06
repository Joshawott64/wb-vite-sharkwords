let word;

function setupWord(element, initWord) {
    word = initWord

    for (let letters of word) {
        element.insertAdjacentHTML('beforeend', '<div class="letter-box"></div>')
    }
}

function isLetterInWord(letter) {
    return word.includes(letter)
}

function revealLetterInWord(letter) {
    let hiddenWord = document.querySelectorAll(".letter-box")
   
    for (let i = 0; i < hiddenWord.length; i++) {
        if (word[i] === letter) {
            hiddenWord[i].innerText = letter
        }
    }
}

// export functions
export {setupWord, isLetterInWord, revealLetterInWord}