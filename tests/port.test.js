let mod = require('../src/ship.js');

describe('port constructor', () => {
    let port =  new mod.Port('Southampton');
    it('returns an object', () => {
        expect(port).toBeInstanceOf(Object);
    });
    it('sets a name', () => {
        expect(port.name).toBe('Southampton');
    })
});