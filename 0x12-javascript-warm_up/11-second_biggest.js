#!/usr/bin/node

// A script that search for the second biggest number

let firstbiggest = -Infinity;
let secondbiggest = -Infinity;

for (let count = 2; count <= (process.argv.length); count++) {
  if (process.argv.length === 2 || process.argv.length === 3) {
    secondbiggest = 0;
  } else if (firstbiggest < Number(process.argv[count])) {
    secondbiggest = firstbiggest;
    firstbiggest = Number(process.argv[count]);
  }
}

console.log(secondbiggest);
