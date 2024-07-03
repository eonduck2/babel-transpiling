"use strict";

var testObj = {
  name: "\uC774\uC885\uC218",
  age: 222,
  alive: true,
};
var test = function test(testObj) {
  return testObj;
};
test(testObj);
