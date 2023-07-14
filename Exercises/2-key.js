'use strict';

const generateKey = (length, possible) => {
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * possible.length);
    result += possible[randomIndex];
  }

  return result;
};

module.exports = { generateKey };
