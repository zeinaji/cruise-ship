let Ship = require('../src/ship.js');
let Port = require('../src/ports');
let Itinerary = require('../src/itinerary');

describe('constructor', () => {
    let southampton = new Port('Southampton');
    let venice = new Port('Venice');
    let itinerary = new Itinerary([southampton, venice]);
    let ship = new Ship(itinerary);
    it('returns an object', () => {
        expect(ship).toBeInstanceOf(Object);
    });
    it('sets port property', () => {
        expect(ship.currentPort).toBe(southampton);
    });
    it('has a previous port property', () => {
        expect(ship.previousPort).toBeFalsy();
    })
});

describe('set sail', () => {
    let southampton = new Port('Southampton');
    let venice = new Port('Venice');
    let itinerary = new Itinerary([southampton, venice]);
    let ship = new Ship(itinerary);
    it('returns whether the ship has left the port', () => {
        ship.setSail();
        expect(ship.previousPort).toBe(southampton);
        expect(ship.currentPort).toBeFalsy();
    });

    it('throws an error when you try and sail past the last port', () => { 
        ship.dock();
        expect(() => ship.setSail()).toThrow('You have reached your destination');
    });
});

describe('dock', () => {
    let southampton = new Port('Southampton');
    let venice = new Port('Venice');
    let itinerary = new Itinerary([southampton, venice]);
    let ship = new Ship(itinerary);

    it('determines the ships destination', () => {
        expect(ship.currentPort).toBe(southampton);
        ship.setSail();
        expect(ship.previousPort).toBe(southampton);
        expect(ship.currentPort).toBeFalsy();
        ship.dock();
        expect(ship.currentPort).toBe(venice);

    });
})