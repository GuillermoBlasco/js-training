const dnaCheck = require('./index').dnaCheck;

test('ok size 1', () => expect(dnaCheck('A','T')).toBe([0]));
test('ok size 0', () => expect(dnaCheck('','')).toBe([]));
test('ok size 5', () => expect(dnaCheck('AGTTC','TCAAG')).toBe([0,0,0,0,0]));
test('bad size 5', () => expect(dnaCheck('AGTTA','TCAAG')).toBe([0,0,0,0,1]));
test('bad size 5', () => expect(dnaCheck('AGTAA','TCAAG')).toBe([0,0,0,1,1]));
test('bad size 7', () => expect(dnaCheck('AAAAAAA','AAAAAAA')).toBe([1,1,1,1,1,1]));
