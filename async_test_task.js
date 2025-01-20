import another_async_test_task from './another_async_test_task';

async function async_test_task() {
  const result = await another_async_test_task();
  return result;
}

export default async_test_task;
