'use strict';

const generateKey = (length, possible) => {
  let key = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * possible.length);
    key += possible[randomIndex];
  }
  return key;
};

module.exports = { generateKey };
