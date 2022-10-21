'use strict';

const methods = (object) => {
  const map = [];
  for (const [key, value] of Object.entries(object)) {
    map.push([key, value.length]);
  }
  return map;
};

module.exports = { methods };
