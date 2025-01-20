const { add, subtract, multiply, divide } = require('./math_operations');

describe('Math Operations', () => {
    test('add: adds two positive numbers', () => {
        expect(add(3, 5)).toBe(8);
    });

    test('add: adds a negative and a fractional number', () => {
        expect(add(-2, 0.5)).toBe(-1.5);
    });

    test('subtract: subtracts two positive numbers', () => {
        expect(subtract(10, 4)).toBe(6);
    });

    test('subtract: subtracts a fractional and a negative number', () => {
        expect(subtract(0.5, -2)).toBe(2.5);
    });

    test('multiply: multiplies two positive numbers', () => {
        expect(multiply(4, 3)).toBe(12);
    });

    test('multiply: multiplies a negative and a fractional number', () => {
        expect(multiply(-1.5, 2)).toBe(-3);
    });

    test('divide: divides two positive numbers', () => {
        expect(divide(9, 3)).toBe(3);
    });

    test('divide: divides a fractional number by a negative number', () => {
        expect(divide(1.5, -0.5)).toBe(-3);
    });
});