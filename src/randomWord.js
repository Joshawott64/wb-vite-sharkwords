// import function from lodash.sample
import sample from 'lodash.sample'

const words = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

function getRandomWord() {
  return sample(words) // invoke the imported 'sample' function
}

// export getRandomWord()
export default getRandomWord