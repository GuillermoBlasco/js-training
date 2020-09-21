const initialise = require('./index').initialise;

test('Rest in peace', () => expect(initialise('Rest in peace')).toBe('RIP'));
test('Lord of the rings', () => expect(initialise('Lord of the rings')).toBe('LOTR'));
test('With some  extra spaces', () => expect(initialise('With some  extra spaces')).toBe('WSES'));
test(' with trailing spaces  ', () => expect(initialise(' with trailing spaces  ')).toBe('WTS'));
test('And some symbol. Within.', () => expect(initialise('And some symbol. Within. ')).toBe('ASSW'));
