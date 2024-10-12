#!/usr/bin/node

// A script that converts the first argument to an integer and prints it

const argument = parseInt(process.argv[2]);

if (!isNaN(argument)) {
  console.log('My number:', argument);
} else {
  console.log('Not a number');
}
