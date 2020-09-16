
const numberToOrdinal = number => {
  // all the cases the number ends in 11, 12, 13: it ends in th
  if (number % 100 > 10 && number % 100 < 14) {
    return number + "th";
  }
  // if ends in 1, then st
  if (number % 10 === 1) {
    return number + "st";
  }
  // if ends in 2, then nd
  if (number % 10 === 2) {
    return number + "nd";
  }
  // if ends in 3, then rd
  if (number % 10 === 3) {
    return number + "rd";
  }
  // th otherwise
  return number + "th";
};

module.exports = {
  numberToOrdinal,
};
