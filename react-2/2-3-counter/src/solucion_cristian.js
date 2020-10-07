import possiblePairs from './bases.json';
// text1 like 'AGTAA'
export const dnaCheck = (text1, text2) => {
  const result = [];
  let i;
  for (i = 0; i < text1.length; i++) {
    const letter1 = text1[i];
    const letter2 = text2[i];
    if (letter1 !== possiblePairs[letter2]) {
      result.push(1);
    } else {
      result.push(0);
    }
  }
  return result;
};
