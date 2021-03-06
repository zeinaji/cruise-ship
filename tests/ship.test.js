let Ship = require('../src/ship');


describe('setup', () => {

    let southampton;
    let venice;
    let itinerary;
    let ship;
    let port;
    beforeEach(() => {
        port = {removeShip: jest.fn(), addShip: jest.fn()};
        southampton = {...port, name: 'Southampton', ships: []};
        venice = {...port, name: 'Venice', ships: []};
        itinerary = {ports: [southampton, venice]};
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
            expect(port.addShip).toHaveBeenCalledWith(ship);
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
            expect(southampton.removeShip).toHaveBeenCalled();

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
            expect(ship.currentPort.addShip).toHaveBeenCalled();
        });

    });
});