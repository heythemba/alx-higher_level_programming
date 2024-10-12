#!/usr/bin/node

// A script that print squares with X

const firstInteger = parseInt(process.argv[2]);
const secondInteger = parseInt(process.argv[3]);

function add (value1, value2) {
  return (value1 + value2);
}
if (!isNaN(firstInteger) && !isNaN(secondInteger)) {
  console.log(add(firstInteger, secondInteger));
} else {
  console.log('NaN');
}
