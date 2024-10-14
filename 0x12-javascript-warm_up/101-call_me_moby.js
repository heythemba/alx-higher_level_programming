#!/usr/bin/node

// script that print a funct x times

exports.callMeMoby = function (x, theFunction) {
  for (let i = 0; i < x; i++) theFunction();
};
