'use strict';

const methods = iface => {
let arr = [];
let i = 0;
  for(let a in iface){
    if(typeof iface[a] === 'function'){
    let c = iface[a].length;
    let att = [a, c];
    arr[i]= att;
    i++;
  }
  }
    return arr;


};

module.exports = { methods };
