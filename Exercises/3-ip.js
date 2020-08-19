'use strict';

const ipToInt = (str = '127.0.0.1') => {
  const a = str.split('.');
  for (const i in a) {
    a[i] = +a[i];
  }
  for (let i = 3, j = 0; i >= 0; i--, j++) {
    a[j] = a[j] << 8 * i;
  }
  return a
    .reduce((sum, cur) => sum + cur, 0);
};

module.exports = { ipToInt };
