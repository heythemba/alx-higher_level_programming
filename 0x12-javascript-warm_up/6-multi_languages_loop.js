#!/usr/bin/node

// A script prints 3 line without if/else statement

const myArray = ['C is fun', 'Python is cool', 'JavaScript is amazing'];

let counter = 0;

do {
  console.log(myArray[counter]);
  counter++;
} while (myArray[counter] !== undefined);
