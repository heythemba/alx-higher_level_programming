#!/usr/bin/node

// A script that prints "x" times "C is fun"

const numberOccurance = process.argv[2];
let counter = 0;

if (!isNaN(numberOccurance)) {
  for (counter = 0; counter < numberOccurance; counter++) {
    console.log("C is fun");
  }
} else {
  console.log('Missing number of occurrences');
}
