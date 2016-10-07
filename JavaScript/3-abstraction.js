'use strict';

let power = Math.pow;
let square = x => power(x, 2);
let cube = x => power(x, 3);

console.log(power(10, 2));
console.log(square(10));

console.log(power(10, 3));
console.log(cube(10));
