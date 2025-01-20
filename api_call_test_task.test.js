import api_call_test_task from './api_call_test_task';

test('should return expected JSON response', async () => {
  const response = await api_call_test_task();
  expect(response).toEqual({ message: 'Success' });
});
