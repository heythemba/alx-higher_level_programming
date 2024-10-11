#!/usr/bin/node

// A script that prints argument passed to it

let numberArgv = [];
numberArgv = process.argv;
if (numberArgv[2] !== undefined) {
  console.log(numberArgv[2], ' is ', numberArgv[3]);
} else {
  console.log('No argument');
}
