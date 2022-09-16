const ShoppingBasket = require("./../phase_one/basket")

const candyDouble1 = { name: 'Mars', price: 4.99 };
const candyDouble2 = { name: 'Skittle', price: 3.99 };

describe('ShoppingBasket', () => {
    const basket = new ShoppingBasket()
    it('returns the total price of 0 at the beginning', () => {
        expect((basket.getTotalPrice())).toBe(0);
    });
    it('checks that the basket price of a candy increase after adding a new item', () => {
        basket.addItem(candyDouble1);
        expect(basket.getTotalPrice()).toBe(4.99);
    });
    it('checks that the basket price of a candy increase after adding a new item', () => {
        basket.addItem(candyDouble2);
        basket.addItem(candyDouble2);
        expect(basket.getTotalPrice()).toBe(12.97);
    });
});
