'use strict';

let sum = new Function('a,b', 'return a+b');

console.dir({
  name: sum.name,
  length: sum.length,
  toString: sum.toString()
});
