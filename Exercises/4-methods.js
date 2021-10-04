'use strict';

const methods = (iface) => {
  const args = [];
  for (const key in iface) {
    if ('function' !== typeof iface[key]) continue;
    args.push([iface[key].name, iface[key].length]);
  }

  return args;
};

module.exports = { methods };
