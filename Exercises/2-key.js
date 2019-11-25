'use strict';
const generateKey = (leng, char) => {
  const rand = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);
  let res = '';
  let i = 0;
  while (i < leng) {
    const ran = rand(0, char.length - 1);
    res += char[ran];
    i++;
  }
  return res;
};

module.exports = { generateKey };
