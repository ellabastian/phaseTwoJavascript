const searchCandies = require("./searchCandies")

describe('searchCandies', () => {
    it('returns an array of candies that start with Ma and that cost less than 10', () => {
        expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
    });
    it('returns an array of candies that start with Ma and that cost less than 2', () => {
        expect(searchCandies('Ma', 2)).toEqual(['Mars']);
    });
    it('returns an array of candies that start with S and that cost less than 10', () => {
        expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
    });
    it('returns an array of candies that start with S and that cost less than 4', () => {
        expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles']);
    });
})

// > searchCandies('Ma', 10);
// [ 'Mars', 'Maltesers' ]

// > searchCandies('Ma', 2); // Maltesers excluded: it's more than 2
// [ 'Mars' ]

// > searchCandies('S', 10); 
// [ 'Skitties', 'Skittles', 'Starburst' ]

// > searchCandies('S', 4); 
// [ 'Skitties', 'Skittles' ]