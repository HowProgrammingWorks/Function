'use strict';

const generateKey = (length, possible) => {
  let result = '';
  while (result.length < length) {
    const randomIndex = Math.floor(Math.random() * possible.length);
    result += possible[randomIndex];
  }
  return result;
};

module.exports = { generateKey };
