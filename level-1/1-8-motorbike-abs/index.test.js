const absCheck = require('./index').absCheck;
const examples = require('./examples.json');

Object.keys(examples)
  .forEach(key => {
    const example = examples[key];
    test(key, () => expect(absCheck(example.sensorData, example.config)).toStrictEqual(example.output));
  })
