const scheduleTasks = require('./index').scheduleTasks;

//test('1 time', () => expect(scheduleTasks({ starting: '2020-01-01', repeat: 1, each: 2})).toStrictEqual(['2020-01-01']));
//test('0 times', () => expect(scheduleTasks({ starting: '2020-01-01', repeat: 0, each: 2})).toStrictEqual([]));
//test('3 times', () => expect(scheduleTasks({ starting: '2020-01-01', repeat: 3, each: 2})).toStrictEqual(['2020-01-01', '2020-01-03', '2020-01-07']));
test('0 times', () => expect(scheduleTasks({ starting: '2020-09-27', repeat: 1, each: 7})).toStrictEqual([]));
