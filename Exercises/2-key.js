'use strict';

const generateKey = (length, possible) => {
  let result = '';
  while (result.length < length) {
    const randomIdx = Math.floor(Math.random() * possible.length);
    result += possible[randomIdx];
  }
  return result;
};

module.exports = { generateKey };
