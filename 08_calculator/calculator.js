const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1 ,num2) {
  difference = num1 - num2;
  (difference < 0) ? difference *= -1 : difference *= 1;
  return difference;
};

const sum = function(givenArray) {
  return givenArray.reduce((addition, current) => addition + current, 0);
};

const multiply = function(givenArray) {
  return givenArray.reduce((multiplication, current) => multiplication * current);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  let value = 1;
  for (let i = n; i >= 1; i--) {
    value *= i;
  }
  return value;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
