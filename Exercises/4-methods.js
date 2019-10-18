'use strict';

const methods = iface => {
  const sArr = [];
  for (const i in iface) {
    if (typeof(iface[i]) === 'function') {
      const arr = [iface[i].name, iface[i].length];
      sArr.push(arr);
    }
  }
  return sArr;
};

module.exports = { methods };
