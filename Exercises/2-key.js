'use strict';

const generateKey = (length, characters) => {
  let key = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    key += characters[randomIndex];
  }
  return key;
};

module.exports = { generateKey };
