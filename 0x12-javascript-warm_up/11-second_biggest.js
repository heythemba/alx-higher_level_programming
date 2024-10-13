#!/usr/bin/node

// A script that searches for the second biggest number

let firstbiggest = -Infinity;
let secondbiggest = -Infinity;

// If fewer than two numbers are provided, set secondbiggest to 0
if (process.argv.length <= 3) {
  console.log(0);
} else {
  // Loop through the arguments starting from the third element (index 2)
  for (let count = 2; count < process.argv.length; count++) {
    const num = Number(process.argv[count]);

    if (num > firstbiggest) {
      secondbiggest = firstbiggest;
      firstbiggest = num;
    } else if (num > secondbiggest && num < firstbiggest) {
      secondbiggest = num;
    }
  }

  // After the loop, print the second biggest number
  console.log(secondbiggest);
}
