const validateSudoku = require('./index').validateSudoku;
const examples = require('./examples.json');

Object.keys(examples)
  .forEach(key => {
    test(key, () => expect(validateSudoku(examples[key])).toBe(key.includes('ok')));
  })
