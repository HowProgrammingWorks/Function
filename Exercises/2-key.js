'use strict';

// Generate string of random characters
// Use Math.random() and Math.floor()
// See documentation at MDN

const generateKey = (length, possible) => {
  let key = '';
  const base = possible.length - 1;

  while (key.length < length) {
    const index = Math.floor(Math.random() * base);
    key += possible[index];
  }

  return key;
};

module.exports = { generateKey };
