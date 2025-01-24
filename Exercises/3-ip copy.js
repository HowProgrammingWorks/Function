'use strict';

const ipToInt = (ip = '127.0.0.1') => {

  const stringToArray = ip.split('.');
  const stringToNumbers = [];

  stringToArray.forEach((el) => {
    stringToNumbers.push(Number(el));
  });

  const resultArray = [];
  const sideElements = stringToNumbers.reverse();

  while (sideElements.length) {

    let sideElement = sideElements.pop();
    let i = sideElements.length;

    while (i > 0) {
      sideElement <<= 8;
      i--;
    }

    resultArray.push(sideElement);

  }

  return resultArray.reduce((acc, vol) => (acc += vol));

};

module.exports = { ipToInt };
