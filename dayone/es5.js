"use strict";

var a = 6;

map(function (item) {
  return item + 1;
});

setTimeout(function () {
  return a = a + 1;
});
