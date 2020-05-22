'use strict';

const generateKey = (length, possible) => {
  const strLen = possible.length;
  let arr = '';
  for (let i = 0; i < length; i++) {
    const item = Math.floor(Math.random() * strLen);
    arr += possible[item];
  }
  return arr;
};

module.exports = { generateKey };
