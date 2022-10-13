'use strict';

const fs = require('node:fs');

// Print specified line from a file
//   fileName - string, file to parse
//   lineNumber - number, line starting from 1
// Returns: boolean, success status
const printLine = (fileName, lineNumber) => {
  const content = fs.readFileSync(fileName).toString();
  const lines = content.split('\n');
  const line = lines[lineNumber - 1];
  if (line === undefined) return false;
  console.dir({
    fileName, lineNumber, line
  });
};

printLine('./c-comments.js', 5);
