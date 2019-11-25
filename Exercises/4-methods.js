'use strict';

const methods = obj => {
  const ans = [];
  for (const key in obj) {
    if (typeof obj[key] === 'function') {
      ans.push([key, obj[key].length]);
    }
  }
  return ans;
};

module.exports = { methods };
