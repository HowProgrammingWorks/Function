'use strict';

const generateKey = (length, possible) => {
  let res = '';
  const range = possible.length;
  for (let i = 0; i < length; i++) {
    const key = Math.floor(range * Math.random());
    res += possible[key];
  }
  return res;
};

module.exports = { generateKey };
