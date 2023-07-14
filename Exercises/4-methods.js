'use strict';

const methods = (iface) => {
  const result = [];
  for (const method in iface) {
    if (typeof iface[method] === 'function') {
      result.push([method, iface[method].length]);
    }
  }

  return result;
};

// console.log(
//   'methods :>> ',
//   methods({
//     m1: (x) => [x],
//     m2: function (x, y) {
//       return [x, y];
//     },
//     m3(x, y, z) {
//       return [x, y, z];
//     },
//   })
// );

// function inspectInterface(iface) {
//   // Get the keys of iface object
//   let keys = Object.keys(iface);

//   // Filter keys with function type
//   keys = keys.filter((key) => typeof iface[key] === 'function');

//   // Map the keys array to a desired format
//   let result = keys.map((key) => [key, iface[key].length]);

//   return result;
// }

module.exports = { methods };
