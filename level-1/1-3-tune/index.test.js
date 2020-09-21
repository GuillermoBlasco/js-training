const tune = require('./index').tune;

test('441', () => expect(tune(441)).toStrictEqual({ note: 'A4', below: false, above: true }));
test('440', () => expect(tune(440)).toStrictEqual({ note: 'A4', below: false, above: false }));
test('109', () => expect(tune(109)).toStrictEqual({ note: 'A2', below: true, above: false }));
test('92', () => expect(tune(92)).toStrictEqual({ note: 'Gb2', below: true, above: false }));
