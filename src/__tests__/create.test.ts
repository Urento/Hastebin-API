import { createHaste } from '../index';

/**
 * For running the Tests successfully the Hastebin Server needs to be running locally on port 4001
 */

test('My Greeter', async () => {
  const content = 'this is a test';
  const r = await createHaste('http://localhost:4001', content);
  expect(await r.content).toBe(content);
});
