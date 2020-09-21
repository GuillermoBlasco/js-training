const scheduleTasks = require('./index').scheduleTasks;

test('1 time', () => expect(scheduleTasks({ starting: '2020-01-01', repeat: 1, each: 2})).toBe(['2020-01-01']));
test('0 times', () => expect(scheduleTasks({ starting: '2020-01-01', repeat: 0, each: 2})).toBe([]));
test('3 times', () => expect(scheduleTasks({ starting: '2020-01-01', repeat: 3, each: 2})).toBe(['2020-01-01', '2020-01-03', '2020-01-07']));
