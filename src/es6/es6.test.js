import { asyncDoGetUsername } from './async';

test('asyncDoGetUsername return abc', async () => {
    const data = await asyncDoGetUsername();
    expect(data).toBe('abc');
});
