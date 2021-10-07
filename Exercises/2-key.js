'use strict';

const generateKey = (length, possible) => {
//jhjjjfdfsfdfsadawddddsdsdsds
  let arr = possible.split('')
  let s = '';
  for(let i = 0; i <length;i++){
    s += arr[(Math.floor(Math.random()*length))];
  }
  return s;
};

module.exports = { generateKey };
