'use strict';

function inc(a) {
  return ++a;
}

const sum = function(a, b) {
  return a + b;
};

const max = (a, b) => (a > b ? a : b);

console.dir('inc(5) = ' + inc(5));
console.dir('sum(1, 3) = ' + sum(1, 3));
console.dir('max(8, 6) = ' + max(8, 6));
