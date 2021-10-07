'use strict';

const methods = iface => {
let arr = [];
let i = 0;
  for(let a in iface){
    let b = a;
    let c = iface[a].length;
    let att = [b, c];
    arr[i]= att;
    i++;
  }
    return arr;
  //dsds

};

module.exports = { methods };
