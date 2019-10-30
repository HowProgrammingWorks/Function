'use strict';
const generateKey = (length, possible) => {
  let s = '';
  for (let i = 0; i < length; i++) {
    s += possible[Math.floor(Math.random() * length)];
  }
  return s;
};

module.exports = { generateKey };
