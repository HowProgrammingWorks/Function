'use strict';

const random = (min, max) => {
//fddd
  if(max === undefined){
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random()*(max-min));
};

module.exports = { random };
