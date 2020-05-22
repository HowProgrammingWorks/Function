'use strict';

const methods = iface => {
  const arr = [];
  for (const item in iface) {
    if (typeof iface[item] === 'function') {
      arr.push([item, iface[item].length]);
    }
  }
  return arr;
};

module.exports = { methods };
