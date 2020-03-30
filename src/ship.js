/*const Itinerary = require('../src/itinerary');
const Port = require('../src/ports');*/


function Ship (itinerary) {
    this.itinerary = itinerary.ports;
    this.previousPort = null;
    this.currentPort = itinerary.ports[0]; 
}

Ship.prototype.setSail = function () {
    let length = this.itinerary.length;
    if(this.currentPort === this.itinerary[length - 1]) {
        throw new Error('You have reached your destination');
    } else {
    this.previousPort = this.currentPort;
    this.currentPort = null; 
    } 
}

Ship.prototype.dock = function () {
    let index = this.itinerary.indexOf(this.previousPort)
    this.currentPort = this.itinerary[index + 1];
}

module.exports = Ship;