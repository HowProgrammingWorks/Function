'use strict';

const ipToInt = (str = '127.0.0.1') => {
  const arr = str.split('.');
  for (const i in arr) {
    arr[i] = +arr[i];
  }
  for (let i = 3, j = 0; i >= 0; i--, j++) {
    arr[j] = arr[j] << 8 * i;
  }
  const res = arr
    .reduce((sum, cur) => sum + cur, 0);
  return res;
};

module.exports = { ipToInt };
