let Ship = require('../src/ship');
let Port = require('../src/ports');
let Itinerary = require('../src/itinerary');

describe('setup', () => {

    let southampton;
    let venice;
    let itinerary;
    let ship;
    beforeEach(() => {
        southampton = new Port('Southampton');
        venice = new Port('Venice');
        itinerary = new Itinerary([southampton, venice]);
        ship = new Ship(itinerary);
    });

    describe('constructor', () => {
        
        it('returns an object', () => {
            expect(ship).toBeInstanceOf(Object);
        });

        it('sets port property', () => {
            expect(ship.currentPort).toBe(southampton);
        });

        it('has a previous port property', () => {
            expect(ship.previousPort).toBeFalsy();
        });

        it('gets added to port on instantiation', () => {
            expect(ship.currentPort.ships).toEqual([ship]);
        });
    });



    describe('set sail', () => {

        it('can set sail', () => {
            ship.setSail();
            expect(ship.previousPort).toBe(southampton);
            expect(ship.currentPort).toBeFalsy();
        });

        it('throws an error when you try and sail past the last port', () => {
            ship.setSail();
            ship.dock();
            expect(() => ship.setSail()).toThrow('You have reached your destination');
        });

        it('removes the ship from the previous ports ships', () => {
            ship.setSail();
            expect(southampton.ships).not.toContain(ship);

        });
    });

    describe('set sail', () => {

        it('can dock at a different port', () => {
            expect(ship.currentPort).toBe(southampton);
            ship.setSail();
            expect(ship.previousPort).toBe(southampton);
            expect(ship.currentPort).toBeFalsy();
            ship.dock();
            expect(ship.currentPort).toBe(venice);
        });

        it('gets added to the ports ships', () => {
            ship.setSail();
            ship.dock();
            expect(ship.currentPort.ships).toContain(ship);
        });

    });
});