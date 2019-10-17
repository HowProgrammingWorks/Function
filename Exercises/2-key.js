'use strict';

const generateKey = (length, possible) => {
  const max = possible.length - 1;
  let str = '';
  for (let i = 0; i < length; i++) {
    const num = Math.floor(Math.random() * max);
    str += possible[num];
  }
  return str;
};

module.exports = { generateKey };
