import promise_test_task from './promise_test_task';

test('should resolve with hello world', () => {
  return expect(promise_test_task()).resolves.toBe('hello world');
});
