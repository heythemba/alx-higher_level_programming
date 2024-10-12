#!/usr/bin/node

// A script that print squares with X

const squareDim = process.argv[2];
let counter1 = 0;
let counter2 = 0;

if (!isNaN(squareDim)) {
  for (counter1 = 0; counter1 < squareDim; counter1++) {
    for (counter2 = 0; counter2 < squareDim; counter2++) {
      process.stdout.write('X');
    }
    process.stdout.write('\n');
  }
} else {
  console.log('Missing size');
}
