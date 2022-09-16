const fizzBuzz = require("./../phase_one/fizzbuzz_ex")

describe('fizzbuzz', () => {
    it('returns FizzBuzz if a number is divisible by 15', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });
    it('returns Fizz if a number is divisible by 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
        expect(fizzBuzz(18)).toBe('Fizz');
    });
    it('returns Buzz if a number is divisible by 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
        expect(fizzBuzz(20)).toBe('Buzz');
    });
    it('returns the number passed in if that number is not divisible by 3, 5 or 15', () => {
        expect(fizzBuzz(8)).toBe(8);
    });
});