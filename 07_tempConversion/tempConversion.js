const convertToCelsius = function(givenFahrenheit) {
  let toCelsius = (givenFahrenheit - 32) * 5/9;
  return Math.round(toCelsius * 10) / 10;
};

const convertToFahrenheit = function(givenCelsius) {
  let toFahrenheit = (givenCelsius * 9/5) + 32;
  return Math.round(toFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
