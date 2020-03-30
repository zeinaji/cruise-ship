
const Port = require('../src/ports');
const Itinerary = require('../src/itinerary');

describe('itinerary constructor', () => {
    let southampton = new Port('Southampton');
    let venice = new Port('Venice');
    let itinerary = new Itinerary([southampton, venice]);
    it('returns an object', () => {
        expect(itinerary).toBeInstanceOf(Object);
    });
    
    it('has a ports property', () => {
        expect(itinerary.ports).toEqual([southampton, venice]);
    });

})