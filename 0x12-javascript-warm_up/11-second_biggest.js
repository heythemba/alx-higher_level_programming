#!/usr/bin/node

// A script that search for the second biggest number

let firstbiggest = 0;
let secondbiggest = 0;
let count;
for (count = 0; count <= (process.argv.length); count++) {
  if (firstbiggest < Number(process.argv[count])) {
    secondbiggest = firstbiggest;
    firstbiggest = Number(process.argv[count]);
  }
}

console.log('Second biggest number is: ', secondbiggest);
