#!/usr/bin/node

// A script that prints argument passed to it

let numberArgv = [];
numberArgv = process.argv;

console.log(numberArgv[2], ' is ', numberArgv[3]);
