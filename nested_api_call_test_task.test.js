import nested_api_call_test_task from './nested_api_call_test_task';

test('should return expected JSON response', async () => {
  const response = await nested_api_call_test_task();
  expect(response).toEqual({ message: 'Success' });
});
