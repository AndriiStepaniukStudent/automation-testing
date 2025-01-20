import api_call_test_task from './api_call_test_task';

async function nested_api_call_test_task() {
  const response = await api_call_test_task();
  return response;
}

export default nested_api_call_test_task;