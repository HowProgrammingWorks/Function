'use strict';

const generateKey = (length, possible) => {
  const arr = possible;
  let string = '';
  for (let i = 0; i < length; i++) {
    const num = Math.floor(Math.random() * length);
    string += arr[num];
  }
  return string;
};

module.exports = { generateKey };
