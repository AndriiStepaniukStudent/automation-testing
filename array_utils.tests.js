const { sumArray, filterPositive, filterNegative } = require('./array_utils');

describe('Array Utilities', () => {
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
