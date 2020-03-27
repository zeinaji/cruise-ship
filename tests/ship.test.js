const Ship = require('../src/ship');

describe('constructor', () => {
    let ship = new Ship('Southampton')
    it('returns an object', () => {
        expect(ship).toBeInstanceOf(Object);
    });
    it('sets port property', () => {
        expect(ship.portName).toBe('Southampton');
    })
});