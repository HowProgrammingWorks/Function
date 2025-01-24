'use strict';

const methods = (iface) => {

  const resultArray = [];

  for (const fn of Object.keys(iface)) {
    const length = iface[fn].length; //todo checking typeof function
    resultArray.push([fn, length]);
  }
  return resultArray;
};

module.exports = { methods };
