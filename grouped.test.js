const { sumArray, filterPositive, filterNegative } = require('./array_utils');
const { isPalindrome, isAnagram } = require('./string_operations');

describe('Array Utilities Tests', () => {
    let testArray;

    beforeAll(() => {
        testArray = [1, -2, 3, -4, 5, 0];
    });

    test('sumArray: calculates the sum of array elements', () => {
        expect(sumArray(testArray)).toBe(3);
    });

    test('filterPositive: returns only positive numbers', () => {
        expect(filterPositive(testArray)).toEqual([1, 3, 5]);
    });

    test('filterNegative: returns only negative numbers', () => {
        expect(filterNegative(testArray)).toEqual([-2, -4]);
    });
});

describe('String Operations Tests', () => {
    test('isPalindrome: detects a palindrome', () => {
        expect(isPalindrome('racecar')).toBe(true);
    });

    test('isPalindrome: detects a non-palindrome', () => {
        expect(isPalindrome('hello')).toBe(false);
    });

    test('isAnagram: detects an anagram', () => {
        expect(isAnagram('listen', 'silent')).toBe(true);
    });

    test('isAnagram: detects a non-anagram', () => {
        expect(isAnagram('hello', 'world')).toBe(false);
    });
});
