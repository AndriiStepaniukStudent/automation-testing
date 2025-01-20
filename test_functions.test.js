function containsObject(arr, obj) {
    return arr.includes(obj);
  }
  
  function containsWord(text, word) {
    return text.includes(word);
  }
  
  function containsField(obj, field) {
    return field in obj;
  }
  
  function executeCallbackOnArray(arr, callback) {
    arr.forEach(callback);
  }
  
  test('callback invocation count', () => {
    const array = [1, 2, 3];
    const mockCallback = jest.fn();
    executeCallbackOnArray(array, mockCallback);
    expect(mockCallback).toHaveBeenCalledTimes(3);
  });
  
  function executeCallbackOnWords(phrase, callback) {
    const words = phrase.split(' ');
    words.forEach(callback);
  }
  
  test('checking callback arguments', () => {
    const mockCallback = jest.fn();
    const phrase = 'Hello world';
    executeCallbackOnWords(phrase, mockCallback);
    expect(mockCallback).toHaveBeenCalledWith('Hello');
    expect(mockCallback).toHaveBeenCalledWith('world');
  });
  
  class Person {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
  
    introduce() {
      console.log(`Hello, I'm ${this.firstname} ${this.lastname}`);
    }
  }
  
  test('checking method call count', () => {
    const person = new Person('John', 'Doe');
    const spy = jest.spyOn(person, 'introduce');
    person.introduce();
    expect(spy).toHaveBeenCalledTimes(1);
  });
  