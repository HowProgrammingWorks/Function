'use strict';
// Generate string of random characters
// Use Math.random() and Math.floor()
// See documentation at MDN

const generateKey = (length, possible) => {
  let res = '';
  for (let i = 0; i < length; i++) {
    const ran = Math.floor(Math.random() * possible.length);
    const ch = possible[ran];
    res += ch;
  }
  return res;
};

module.exports = { generateKey };
