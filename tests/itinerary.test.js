
const Port = require('../src/ports');
const Itinerary = require('../src/itinerary');

describe('setup', () => {
    let southampton;
    let venice;
    let itinerary;
    beforeEach(() => {
        southampton = jest.fn();
        venice = jest.fn();
        itinerary = new Itinerary([southampton, venice]);
    });
    describe('itinerary constructor', () => {

        it('returns an object', () => {
            expect(itinerary).toBeInstanceOf(Object);
        });

        it('has a ports property', () => {
            expect(itinerary.ports).toEqual([southampton, venice]);
        });

    });
});