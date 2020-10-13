
const numberToOrdinal = number => {
  // exceptions of endings 11, 12, 13
  if (number % 100 >= 11 && number % 100 <= 13) {
    // si la segunda cifra por la derecha es un 1, 112, 113, 111
    return number + "th";
  }
  // exceptions end in 1,2,3
  if (number % 10 === 1) {
    return number + "st";
  }
  if (number % 10 === 2) {
    return number + "nd";
  }
  if (number % 10 === 3) {
    return number  + "rd";
  }
  // general case
  return number + "th";
};

console.log(numberToOrdinal(6));
console.log(numberToOrdinal(23));


module.exports = {
  numberToOrdinal,
};
