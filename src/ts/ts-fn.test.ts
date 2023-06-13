import { tsFn } from './ts-fn';

test('tsFn return tsFn', async () => {
    const data = await tsFn();
    expect(data).toBe('tsFn');
});
