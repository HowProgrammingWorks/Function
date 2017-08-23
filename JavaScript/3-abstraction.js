'use strict';

const power = Math.pow;
const square = x => power(x, 2);
const cube = x => power(x, 3);

console.dir(power(10, 2));
console.dir(square(10));

console.dir(power(10, 3));
console.dir(cube(10));
