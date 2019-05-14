"use strict";

var starMaker = function(n) {
  for (var i = 1; i <= n; i++) {
    var star = "";
    for (var j = 1; j <= i; j++) {
      star = star + "*";
    }
    console.log(star);
  }

  for (var i = n; i >= 1; i--) {
    var star = "";
    for (var j = 1; j <= i; j++) {
      star = star + "*";
    }
    console.log(star);
  }
};

starMaker(10);