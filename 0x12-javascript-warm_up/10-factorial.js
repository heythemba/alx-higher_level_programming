#!/usr/bin/node

// A script that calculate factoriel

const fact = process.argv[2];

function factoriel (n) {
  let f = 1;
  if ((n === 0) || isNaN(n)) {
    return f;
  } else {
    f = factoriel(n - 1) * n;
    return f;
  }
}

console.log(factoriel(fact));
