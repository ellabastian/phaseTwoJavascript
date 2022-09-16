const Candy = require("./../phase_one/candy")

describe('Candy', (name, price) => {
    const candy = new Candy('Mars', 4.99)
    it('returns the name of a candy', () => {
        expect((candy.getName())).toBe('Mars');
    });
    it('returns the price of a candy', () => {
        expect((candy.getPrice())).toBe(4.99);
    });
});
