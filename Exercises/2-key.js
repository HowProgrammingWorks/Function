'use strict';

const generateKey = (length, possible) => {
  const res = new Array(length).fill(0);

  const f = () => {
    const i = Math.floor(Math.random() * possible.length);
    return possible[i];
  };

  return res.map(f).join('');
};

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log('result:', key); // eg599gb60q926j8i
console.log(generateKey.toString().length + ' vs 210');

module.exports = { generateKey };
