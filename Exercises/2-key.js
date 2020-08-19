'use strict';
const generateKey = (leng, char) => {
  let res = '';
  let i = 0;
  while (i < leng) {
    let ba = char.length -1;
    const ran = Math.floor(Math.random() * (ba + 1));
    res += char[ran];
    i++;
  }
  return res;
};

module.exports = { generateKey };
