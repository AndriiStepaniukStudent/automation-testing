import rejected_promise_test_task from './rejected_promise_test_task';

test('should reject with an error', async () => {
  await expect(rejected_promise_test_task()).rejects.toThrow('Something went wrong');
});
