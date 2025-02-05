'use strict';

function methods(iface) {
  const result = [];

  for (const key in iface) {
    if (typeof iface[key] === 'function') {
      result.push([key, iface[key].length]);
    }
  }

  return result;
}

module.exports = { methods };
