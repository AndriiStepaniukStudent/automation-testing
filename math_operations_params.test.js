const { add, subtract, multiply, divide } = require('./math_operations');

describe('Parameterized Math Operations', () => {
    test.each([
        [3, 5, 8],
        [-2, 0.5, -1.5],
        [10, -4, 6]
    ])('add(%i, %i) = %i', (a, b, expected) => {
        expect(add(a, b)).toBe(expected);
    });

    test.each([
        [10, 4, 6],
        [0.5, -2, 2.5],
        [-7, -3, -4]
    ])('subtract(%i, %i) = %i', (a, b, expected) => {
        expect(subtract(a, b)).toBe(expected);
    });

    test.each([
        [4, 3, 12],
        [-1.5, 2, -3],
        [0.1, 0.2, 0.02]
    ])('multiply(%i, %i) = %i', (a, b, expected) => {
        expect(multiply(a, b)).toBe(expected);
    });

    test.each([
        [9, 3, 3],
        [1.5, -0.5, -3],
        [-6, -2, 3]
    ])('divide(%i, %i) = %i', (a, b, expected) => {
        expect(divide(a, b)).toBe(expected);
    });
});
