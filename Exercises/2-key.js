'use strict';

const generateKey = (length, possible) => {
  const arr = [];

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * length);
    arr[i] = possible[randomNumber];
  }

  return arr.join('');
};


module.exports = { generateKey };
