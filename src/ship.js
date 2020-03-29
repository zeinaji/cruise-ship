function Port (name) {
    this.name = name;
}
function Ship (port) {
    this.currentPort = port;
    this.endPort = "";
}

Ship.prototype.setSail = function () {
    this.currentPort = "";
}

Ship.prototype.dock = function (destination) {
    this.currentPort = destination;
}

module.exports = {Ship, Port};