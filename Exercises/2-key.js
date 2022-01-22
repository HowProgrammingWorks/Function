'use strict';

const generateKey = (length, possible) => {
  const max = possible.length;
  let result = '';
  for (let i = 0; i < length; i++) {
    result += possible[Math.floor(Math.random() * (max - Math.random()))];
  }
  return result;
};

module.exports = { generateKey };
