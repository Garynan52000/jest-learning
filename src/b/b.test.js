const b = require('./b');

test('func b return "b"', () => {
    expect(b()).toBe('b');
});
