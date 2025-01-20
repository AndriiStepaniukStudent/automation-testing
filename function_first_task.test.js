import function_first_task from './function_first_task';
import function_second_task from './function_second_task';

jest.mock('./function_second_task', () => jest.fn());

test('should call function_second_task with correct arguments', () => {
  function_first_task('John', 'Doe');
  expect(function_second_task).toHaveBeenCalledWith('John', 'Doe');
});
