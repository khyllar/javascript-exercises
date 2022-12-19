const convertToCelsius = function(F) {
    let multiplier = Math.pow(10, 1 || 0);
    celsius = (5/9) * (F - 32);
    return Math.round(celsius * multiplier) / multiplier;
};

const convertToFahrenheit = function(C) {
    let multiplier = Math.pow(10, 1 || 0);
    fahrenheit = (C * 1.8) + 32;
    return Math.round(fahrenheit * multiplier) / multiplier;
};

convertToCelsius(32);
convertToFahrenheit(0);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
