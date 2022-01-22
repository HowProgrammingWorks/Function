'use strict';

const methods = iface => {
  const result = [];
  for (let key in iface) {
    const value = iface[key];
    if (typeof value === 'function') {
      result.push([value.name, value.length]);
    }
  }
  return result;
};

module.exports = { methods };
