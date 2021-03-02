'use strict';

const generateKey = (length, possible) => {
  let res = '';
  const amount = possible.length;
  for (let i = 0; i < length; i++) {
    const rand = Math.floor(Math.random() * amount);
    res += possible[rand];
  }
  return res;
};

module.exports = { generateKey };
