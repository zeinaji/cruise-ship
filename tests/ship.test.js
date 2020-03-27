const Ship = require('../src/ship');

describe('constructor', () => {
    let ship = new Ship('Southampton');
    it('returns an object', () => {
        expect(ship).toBeInstanceOf(Object);
    });
    it('sets port property', () => {
        expect(ship.startingPort).toBe('Southampton');
    });
});

describe('set sail', () => {
    let ship = new Ship('Southampton');
    it('returns whether the ship has left the port', () => {
        ship.setSail();
        expect(ship.startingPort).toBeFalsy();
    });
})