const compatibleBases = require('./compatibleBases.json');

const checkBases = (char1, char2) => {
  if (compatibleBases[char1] === char2) {
    return 0;
  }
  return 1;
};

const dnaCheck = (text1, text2) => {
  return text1.split('')
    .map((char1, i) => checkBases(char1, text2[i]));
};

module.exports = {
  dnaCheck,
};
