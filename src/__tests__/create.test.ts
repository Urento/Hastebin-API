import { createHaste } from '../index';

test('My Greeter', async () => {
  const content = 'this is a test';
  const r = await createHaste('http://localhost:4001', content);
  expect(await r.content).toBe(content);
});

//3i3JHZoH
