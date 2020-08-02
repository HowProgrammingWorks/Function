'use strict';
const intNumber = str => parseInt(str, 10);
const shiftEight = (num, index, array) => {
  for (let i = 1; i < array.length - index; i++)
    num <<= 8;
  return num;
};
const sumArray = (sum, current) => sum + current;
const ipToInt = (ip = '127.0.0.1') => ip.split('.')
  .map(intNumber)
  .map(shiftEight)
  .reduce(sumArray);

module.exports = { ipToInt };
