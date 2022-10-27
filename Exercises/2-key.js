'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789*!@#$%^';
const generateKey = (length, possible) => {
  const base = possible.length;
  let key = '';

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * base);
    key += possible[index];
  }
  return key;
};
console.dir(generateKey(16, characters));

module.exports = { generateKey };
