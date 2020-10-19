'use strict';

const generateKey = (length, possible) => {
  const arr = possible.split('');

  const res = [];

  for (let i = 0; i < length; i++) {
    res.push(arr[Math.floor(Math.random() * arr.length)]);
  }

  return res.join('');
};

module.exports = { generateKey };
