'use strict';
const generateKey = (length, possible) => {
  let resStr = '';
  for (let i = 0; i < length; i++) {
    const charInd = Math.floor(Math.random() * (possible.length));
    resStr += possible[charInd];
  }
  return resStr;
};
module.exports = { generateKey };
