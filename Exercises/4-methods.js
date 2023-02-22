'use strict';

const methods = (iface) => {
    const fnArr = [];
    for (const name in iface) {
        if (typeof iface[name] === 'function') {
            fnArr.push([name, iface[name].length]);
        }
    }
    return fnArr;
};

module.exports = { methods };
