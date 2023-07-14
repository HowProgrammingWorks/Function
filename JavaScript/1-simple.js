"use strict";

function inc(a) {
  return a + 1;
}

const sum = function (a, b) {
  return a + b;
};

const max = (a, b) => (a > b ? a : b);

const avg = (a, b) => {
  const s = sum(a, b);
  return s / 2;
};

console.log("inc(5) = " + inc(5));
console.log("sum(1, 3) = " + sum(1, 3));
console.log("max(8, 6) = " + max(8, 6));
console.log("avg(8, 6) = " + avg(8, 6));

function ipToInt(ip = "127.0.0.1") {
  return ip
    .split(".") // превращаем строку в массив, разбивая её на элементы по '.'
    .map((byte, index) => Number(byte) << ((3 - index) * 8)) // сдвигаем каждый байт на нужное количество битов в соответствии с правилами, указанными выше
    .reduce((accum, current) => accum + current, 0); // суммируем все, чтобы получить окончательное число
}
