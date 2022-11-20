'use strict';

const methods = (iface) => {
  const array = [];
  let index = 0;

  for (const key in iface) {
    const keyValue = iface[key];

    if (typeof keyValue === 'function') {
      array.push([key, ++index]);
    }
  }

  return array;
};


module.exports = { methods };
