'use strict';

const generateKey = (length, possible) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    const randi = Math.floor(
      Math.random() * possible.length
    );
    result += possible[randi];
  }
  return result;
};

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log('result:', key); // eg599gb60q926j8i
console.log(generateKey.toString().length + ' vs 210');

module.exports = { generateKey };
