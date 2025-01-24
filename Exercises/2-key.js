'use strict';

const characters = () => {
  // some text about function
  const temp = [];
  for (let i = 48; i < 91; i++) {
    if (i > 57 && i < 65) continue;
    temp.push(String.fromCharCode(i).toLowerCase());
  }
  return temp;
};

const generateKey = (length, possible) => {
  // some text about function
  let key = '';
  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * 25) + 1;
    key += possible[random];
  }
  return key;
};

const chars = characters();
const key = generateKey(16, chars);
console.log(key);

module.exports = { generateKey };
