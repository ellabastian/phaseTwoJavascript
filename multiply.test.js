const multiply = require("./multiply");

describe('multiply', () => {
    it('multiplies 2 and 2', () => {
        expect(multiply(2, 2)).toBe(4);
    })
    it('multiplies 0 and 2', () => {
        expect(multiply(0, 2)).toBe(0);
    })
})