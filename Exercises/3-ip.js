'use strict';

// Parse ip address as string, for example '10.0.0.1'
// to ['10', '0', '0', '1'] to [10, 0, 0, 1]
// and convert to Number value 167772161 with bitwise shift
// (10 << 8 << 8 << 8) + (0 << 8 << 8) + (0 << 8) + 1 === 167772161
// Use Array.prototype.reduce of for loop

// Implementation ipToInt using loop
// const ipToInt1 = (ip = '127.0.0.1') => {
//   const ipArray = ip.split('.');
//   let result = 0, result1;
//   let count = 3;
//
//   for (const item of ipArray) {
//     result1 = parseInt(item);
//     for (let i = 1; i <= count; i++) {
//       result1 <<= 8;
//     }
//     count--;
//     result += result1;
//   }
//
//   return result;
// };

// Implementation ipToInt using Array.prototype.reduce
const ipToInt = (ip = '127.0.0.1') => {
  const ipArray = ip.split('.');
  return ipArray.reduce((res, curValue) => (res << 8) + parseInt(curValue), 0);
};

module.exports = { ipToInt };
