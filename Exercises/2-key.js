'use strict';

const generateKey = (length, possible) => {
  let result = '';
  const arrLength = possible.length;
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * arrLength);
    result += possible[index];
  }
  return result;
};

module.exports = { generateKey };
