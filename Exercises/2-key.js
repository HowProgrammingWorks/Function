'use strict';

const generateKey = (length, possible) => {
  let str = '';
  for (let i = 0; i < length; i++) {
    str += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return str;
  //something to make solution longer;
};
module.exports = { generateKey };
