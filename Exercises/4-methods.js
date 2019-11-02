'use strict';

const methods = iface => {
  const array = [];
  for (const key in iface)
    if (key === 'function') array.push([key, iface[key].length]);
  return array;
};

module.exports = { methods };
