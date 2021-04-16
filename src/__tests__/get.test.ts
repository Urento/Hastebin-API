import { getHaste } from '../index';

test('My Greeter', async () => {
  const content = 'this is a test';
  const r = await getHaste('http://localhost:4001', '3i3JHZoH');
  expect(await r.content).toBe(content);
});
