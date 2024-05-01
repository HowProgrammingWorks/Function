'use strict';

const methods = (iface) => {
  const arrOfName = [];

  for (const fn in iface) {
    const typeOfFn = typeof iface[fn];

    if (typeOfFn === 'function') {
      arrOfName.push([fn, iface[fn].length]);
    }
  }

  return arrOfName;

};

module.exports = { methods };
