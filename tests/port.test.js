const Port = require('../src/ports');

describe('port constructor', () => {
    let port =  new Port('Southampton');
    it('returns an object', () => {
        expect(port).toBeInstanceOf(Object);
    });
    it('sets a name', () => {
        expect(port.name).toBe('Southampton');
    })
});