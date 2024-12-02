'use strict';

// Generate string of random characters
// Use Math.random() and Math.floor()
// See documentation at MDN

const generateKey = (length, possible) => {
  let key = '';
  const max = possible.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * max);
    key += possible[randomIndex];
  }
  return key;
};

module.exports = { generateKey };
