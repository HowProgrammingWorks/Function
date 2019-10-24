'use strict';
// Tests not working (manual testing)
const methods = iface => {
  const array = [];
  for (const i in iface) {
    if (typeof iface[i] === 'function') array.push([i, iface[i].length]);
  }
  return array;
};

module.exports = { methods };
