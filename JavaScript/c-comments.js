'use strict';

const fs = require('fs');

const printLine = (
  // Print specified line from a file
  fileName, // file to parse
  lineNumber // number, line starting from 1
  // Returns: boolean, success status
) => {
  const content = fs.readFileSync(fileName).toString();
  const lines = content.split('\n');
  const line = lines[lineNumber - 1];
  if (line === undefined) return false;
  console.dir({
    fileName, lineNumber, line
  });
  return true;
};

printLine('./c-comments.js', 5);
