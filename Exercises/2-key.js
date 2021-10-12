'use strict';

const generateKey = (length, characters) => {
  const len = characters.length;
  let res = '';
  for (let i = 0; i < length; i++) {
    const position = Math.floor(Math.random() * len);
    res += characters[position];
  }
  return res;
};
module.exports = { generateKey };
