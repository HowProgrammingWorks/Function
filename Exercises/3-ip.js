'use strict';

// Parse ip address as string, for example '10.0.0.1'
// to ['10', '0', '0', '1'] to [10, 0, 0, 1]
// and convert to Number value 167772161 with sitwise shift
// (10 << 8 << 8 << 8) + (0 << 8 << 8) + (0 << 8) + 1 === 167772161
// Use Array.prototype.reduce of for loop


const ipToInt = (ip = '127.0.0.1') => {
  const ar = ip.split('.');
  let res = 0;
  for (let i = 0; i < ar.length; i++) res = (res << 8) + ar[i] * 1;
  return res;
};


module.exports = { ipToInt };
