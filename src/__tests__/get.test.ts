import { getHaste } from '../index';

/**
 * For running the Tests successfully the Hastebin Server needs to be running locally on port 4001
 */

test('Try to get the content of a haste', async () => {
  const content = 'this is a test';
  const r = await getHaste('http://localhost:4001', '3i3JHZoH');
  expect(await r.content).toBe(content);
});
