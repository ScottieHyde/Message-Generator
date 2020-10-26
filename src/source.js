const text1 = 'Hello World';
const text2 = 'Hello World2';
const text3 = 'Hello World4';
const messages = [text1, text2, text3];

function randomMessage(array) {
  const randomNumber = Math.floor(Math.random() * Math.floor(3))
  return array[randomNumber]
}

console.log(randomMessage(messages));