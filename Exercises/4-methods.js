'use strict';

const methods = iface => {
  const array = [];

  for (const key in iface) {
    typeof iface[key] === 'function' ? (
      array.push([key, iface[key]().length])
    ) : null;
  }

  return array;
};

module.exports = { methods };
