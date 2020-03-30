const Port = require('../src/ports');
const Ship = require('../src/ship');
const Itinerary = require('../src/itinerary');

describe('port constructor', () => {
    let southampton;
    let itinerary;
    let ship;
    beforeEach(() => {
        southampton = new Port('Southampton');
        itinerary = new Itinerary([southampton]);
        ship = new Ship(itinerary);
    });

    it('returns an object', () => {
        expect(southampton).toBeInstanceOf(Object);
    });

    it('sets a name', () => {
        expect(southampton.name).toBe('Southampton');
    });

    it('adds ships to ports', () => {
        southampton.addShip(ship);
        expect(southampton.ships).toContain(ship);
   });

    it('removes ships from port', () => {
       southampton.removeShip(ship);
       expect(southampton.ships).toEqual([]);
    });

});