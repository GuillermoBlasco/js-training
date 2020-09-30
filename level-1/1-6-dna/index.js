
const checkOneLetter = (letter1, letter2) => {
  if (letter1 === 'T' && letter2 === 'A') {
    return true;
  }
  if (letter1 === 'A' && letter2 === 'T') {
    return true;
  }
  if (letter1 === 'C' && letter2 === 'G') {
    return true;
  }
  if (letter1 === 'G' && letter2 === 'C') {
    return true;
  }
  return false;
};

// text1 like 'AGTAA'
const dnaCheck = (text1, text2) => {
  return text1.split('').map((letter1, i) => {
    const letter2 = text2[i];
    if (checkOneLetter(letter1, letter2)) {
      return 0;
    }
    return 1;
  });
};

module.exports = {
  dnaCheck,
};
