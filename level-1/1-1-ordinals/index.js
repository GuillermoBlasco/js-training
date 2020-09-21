
const numberToOrdinal = number => {
  const lastTwoDigits = number % 100;
  if (lastTwoDigits > 10 && lastTwoDigits <= 13) {
    // 111, 213, 10812
    return number + "th";
  }
  if (number % 10 === 1) {
    return number + "st";
  }
  if (number % 10 === 2) {
    return number + "nd";
  }
  if (number % 10 === 3) {
    return number + "rd";
  }
  return number + "th";
};

module.exports = {
  numberToOrdinal,
};
