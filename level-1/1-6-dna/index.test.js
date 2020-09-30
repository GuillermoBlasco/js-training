const dnaCheck = require('./index').dnaCheck;

test('ok size 1', () => expect(dnaCheck('A','T')).toStrictEqual([0]));
test('ok size 0', () => expect(dnaCheck('','')).toStrictEqual([]));
test('ok size 5', () => expect(dnaCheck('AGTTC','TCAAG')).toStrictEqual([0,0,0,0,0]));
test('bad size 5', () => expect(dnaCheck('AGTTA','TCAAG')).toStrictEqual([0,0,0,0,1]));
test('bad size 5', () => expect(dnaCheck('AGTAA','TCAAG')).toStrictEqual([0,0,0,1,1]));
test('bad size 7', () => expect(dnaCheck('AAAAAAA','AAAAAAA')).toStrictEqual([1,1,1,1,1,1,1]));
