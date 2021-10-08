'use strict';

const methods = (iface) => {
  const arrayExit = [];
  for (const methodName in iface) {
    const method = iface[methodName];
    arrayExit.push([`${methodName}`, method.length]);
  }
  return arrayExit;
};

module.exports = { methods };
