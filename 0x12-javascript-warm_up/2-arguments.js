#!/usr/bin/node

// A script that print a message depends on number of arguments

const numberOfArguments = process.argv.length;

if (numberOfArguments <= 2) {
  console.log('No argument');
} else if (numberOfArguments <= 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
