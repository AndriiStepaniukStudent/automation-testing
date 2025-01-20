import async_test_task from './async_test_task';

test('should resolve with expected number', async () => {
  const result = await async_test_task();
  expect(result).toBe(42);
});
