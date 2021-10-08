'use strict';

const generateKey = (length, possible) => {
  let key = '';
  for (let i = 1; i <= length; i++) {
    const randomCharIndex = Math.floor(Math.random() * possible.length);
    key += possible[randomCharIndex];
  }
  return key;
};

module.exports = { generateKey };
