#!/usr/bin/node

// A script that print a message depends on number of arguments without using length

let numberArgv = [];
numberArgv = process.argv;
if (numberArgv[2] !== undefined) {
  console.log(numberArgv[2]);
} else {
  console.log('No argument');
}
