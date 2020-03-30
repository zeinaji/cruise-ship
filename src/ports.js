
function Port (name) {
    this.name = name;
    this.ships = [];
}


Port.prototype.addShip = function (ship) {
    this.ships.push(ship);
}

Port.prototype.removeShip = function (ship) {
    let shipIndex = this.ships.indexOf(ship);
    this.ships.splice(shipIndex, 1);
}
module.exports = Port;