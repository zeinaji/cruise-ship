function Ship (port) {
    this.startingPort = port;
}

Ship.prototype.setSail = function () {
    this.startingPort = "";
}


module.exports = Ship;