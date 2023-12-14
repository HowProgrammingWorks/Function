'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  return ip.split('.').reduce((accumulator, currentValue, currentIndex, array) => {
    return accumulator + (parseInt(currentValue) << ((array.length - currentIndex - 1) * 8));
  }, 0);
};

module.exports = { ipToInt };

