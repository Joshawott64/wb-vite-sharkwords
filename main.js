import getRandomWord from './src/randomWord.js' // import 'getRandomWord' function from randomWord.js
import setSharkImage from './src/sharkImage.js' // import 'setSharkImage' function from sharkImage.js
import {setupWord, isLetterInWord, revealLetterInWord} from './src/word.js' // import functions from 'word.js'
import setupGuesses from './src/guess.js' // import 'setupGuesses' function from 'guess.js'
import './style.css';

document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

const initSharkwords = () => {
  let numWrong = 0;
  const word = getRandomWord() // invoke imported 'getRandomWord' function and set its value to the 'word' variable

  setSharkImage(document.querySelector('#shark-img'), numWrong) // invoke imported 'setSharkImage' function
  setupWord(document.querySelector('#word-container'), word) // invoke imported 'setupWord' function

  const sharkImg = document.querySelector('#shark-img')

  const handleGuess = (guessEvent, letter) => {
    const button = guessEvent.target
    button.setAttribute('disabled', true) // disable button

    if (isLetterInWord(letter)) {
      revealLetterInWord(letter)
    } else {
      numWrong++
      setSharkImage(sharkImg,numWrong)
    }

    // check if game should end
    let isWordComplete

    for (let letter of document.querySelectorAll('.letter-box')) {
      if (letter.innerText === '') {
        isWordComplete = false
        break
      } 
    }
  }

  setupGuesses(document.querySelector('#letter-buttons'), handleGuess)

  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`)
};

initSharkwords();
