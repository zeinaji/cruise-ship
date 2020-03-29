let mod = require('../src/ship.js');

describe('constructor', () => {
    let port = new mod.Port('Southampton');
    let ship = new mod.Ship(port);
    it('returns an object', () => {
        expect(ship).toBeInstanceOf(Object);
    });
    it('sets port property', () => {
        expect(ship.currentPort).toBe(port);
    });
});

describe('set sail', () => {
    let port = new mod.Port('Southampton');
    let ship = new mod.Ship(port);
    it('returns whether the ship has left the port', () => {
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
    });
});

describe('dock', () => {
    let southampton = new mod.Port('Southampton');
    let venice = new mod.Port('Venice');
    let ship = new mod.Ship(southampton);

    it('determines the ships destination', () => {
        expect(ship.currentPort).toBe(southampton);
        ship.dock(venice);
        expect(ship.currentPort).toBe(venice);

    });
})