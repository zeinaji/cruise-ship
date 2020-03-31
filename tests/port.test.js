const Port = require('../src/ports');
const Ship = require('../src/ship');
const Itinerary = require('../src/itinerary');

describe('setup', () => {
    let southampton;
    let ship;
    beforeEach(() => {
        southampton = new Port('Southampton');
        ship = jest.fn();
    });

    describe('port constructor', () => {
        it('returns an object', () => {
            expect(southampton).toBeInstanceOf(Object);

        });
        it('sets a name', () => {
            expect(southampton.name).toBe('Southampton');
        });
    });

    describe('addShip', () => {
        it('adds ships to ports', () => {
            southampton.addShip(ship);
            expect(southampton.ships).toContain(ship);
        });
    });

    describe('removeShip', () => {
        it('removes ships from port', () => {
            southampton.removeShip(ship);
            expect(southampton.ships).toEqual([]);
        });

    });
});