'use strict';

const powName = 'pow';

const obj1 = {
  fn1: function inc(a) {
    return ++a;
  },
  sum: function(a, b) {
    return a + b;
  },
  inc(a) {
    return ++a;
  },
  max: (a, b) => {
    return a > b ? a : b;
  },
  min: (a, b) => (a < b ? a : b),
  dec: a => --a,
  [powName](a, b) {
    return Math.pow(a, b);
  }
};

console.log('obj1.fn1.name = ' + obj1.fn1.name);
console.log('obj1.sum.name = ' + obj1.sum.name);
console.log('obj1.inc.name = ' + obj1.inc.name);
console.log('obj1.max.name = ' + obj1.max.name);
console.log('obj1.min.name = ' + obj1.min.name);
console.log('obj1.dec.name = ' + obj1.dec.name);

console.log('obj1.fn1(5) = ' + obj1.fn1(5));
console.log('obj1.sum(1, 3) = ' + obj1.sum(1, 3));
console.log('obj1.max(8, 6) = ' + obj1.max(8, 6));

console.log('obj1.pow(8, 6) = ' + obj1.pow(8, 6));
console.log('obj1[\'pow\'](8, 6) = ' + obj1['pow'](8, 6));
