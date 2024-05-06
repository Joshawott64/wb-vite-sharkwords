const alphabet = 'abcdefghijklmnopqrstuvwxyz'; // declared 'alphabet' variable

function setupGuesses(element, handleGuess) { // function that takes in two parameters, element and handleGuess (handleGuess appears to be a function)
  alphabet.split('').forEach((letter) => { // splits 'alphabet' into an array and loops through each letter item in the array
    const btn = document.createElement('button'); // creates a button element each time the loop iterates
    btn.innerText = letter; // assigns each button's innerText to the current letter
    btn.addEventListener('click', (e) => handleGuess(e, letter)); // adds a 'click' event listener, passing the letter into the handleGuess function
    element.append(btn); // appends button to element
  });
}

export default setupGuesses; // exports the 'setupGuesses' function
