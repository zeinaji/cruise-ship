(function exportShip() {
  function Ship(itinerary) {
    this.itinerary = itinerary.ports;
    this.previousPort = null;
    if (this.itinerary.length > 0) {
      this.currentPort = itinerary.ports[0];
      this.currentPort.addShip(this);
    }
  }

  Ship.prototype.setSail = function () {
    let length = this.itinerary.length;
    if (this.currentPort === this.itinerary[length - 1]) {
      throw new Error("You have reached your destination");
    } else {
      this.previousPort = this.currentPort;
      this.currentPort = null;
    }
    this.previousPort.removeShip(this);
  };

  Ship.prototype.dock = function () {
    let index = this.itinerary.indexOf(this.previousPort);
    this.currentPort = this.itinerary[index + 1];
    this.currentPort.addShip(this);
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Ship;
  } else {
    window.Ship = Ship;
  }
})();
