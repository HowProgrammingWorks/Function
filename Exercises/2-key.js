'use strict';

const generateKey = (length, possible) => {
  let key = '';
  for (let i = 0; i < length; i++) {
    const randomStringIndex = Math.floor(Math.random() * length);
    key += possible[randomStringIndex];
  }

  return key;
};

// const generateKey = (length, possible) => {
//   return possible.split('').reduce((key, char, i , array) => {
//     return key + array[Math.floor(Math.random() * length)]);
//   }
// }

module.exports = { generateKey };
