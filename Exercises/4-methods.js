'use strict';

const methods = iface => {
  const arr = [];
  for (const i in iface) {
    const fn = iface[i].length;
    //const name = iface[i];
    /*if (typeof name === 'function')*/
    arr.push([i, fn]);
  }
  return arr;
};

module.exports = { methods };
