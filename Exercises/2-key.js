'use strict';
// Tests not working (manual testing)
const generateKey = (length, characters) => {
  const randomChar = () => Math.floor(Math.random() * characters.length);
  let randChar = '';
  for (let char = 1; char <= length; char++) {
    randChar += characters[randomChar()];
  }
  return randChar;
};

module.exports = { generateKey };
