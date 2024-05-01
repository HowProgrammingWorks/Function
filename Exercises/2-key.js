'use strict';

const generateKey = (length, possible) => {
  let key = '';
  const lenStr = possible.length;

  for (let i = 1; i <= length; ++i) {
    key += possible[Math.floor(Math.random() * (lenStr - 1) + 1)];
  }

  return key;
};

module.exports = { generateKey };
