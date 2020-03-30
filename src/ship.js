const Port = require('../src/ports');


function Ship (itinerary) {
    this.itinerary = itinerary.ports;
    this.previousPort = null;
    this.currentPort = itinerary.ports[0];
    this.currentPort.addShip(this);
    
}

Ship.prototype.setSail = function () {
    let length = this.itinerary.length;
    if(this.currentPort === this.itinerary[length - 1]) {
        throw new Error('You have reached your destination');
    } else {
    this.previousPort = this.currentPort;
    this.currentPort = null; 
    } 
    this.previousPort.removeShip(this);
}

Ship.prototype.dock = function () {
    let index = this.itinerary.indexOf(this.previousPort)
    this.currentPort = this.itinerary[index + 1];
    this.currentPort.addShip(this);
}

 

module.exports = Ship;