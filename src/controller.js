function Controller(ship) {
  this.initialiseSea();
  this.ship = ship;
  const submitButton = document.querySelector("#submit");
  submitButton.addEventListener("click", () => {
    this.addPort(event);
  });
}

Controller.prototype.initialiseSea = function () {
  const backgrounds = ["./images/water0.png", "./images/water1.png"];
  let backgroundIndex = 0;
  window.setInterval(() => {
    document.querySelector("#viewport").style.backgroundImage = `url('${
      backgrounds[backgroundIndex % backgrounds.length]
    }')`;
    backgroundIndex += 1;
  }, 1000);
};

Controller.prototype.renderPorts = function (ports) {
  const portsElement = document.querySelector("#ports");
  portsElement.style.width = "0px";
  ports.forEach((port, index) => {
    const newPortElement = document.createElement("div");
    newPortElement.className = "port";
    newPortElement.dataset.portName = port.name;
    newPortElement.dataset.portIndex = index;
    portsElement.appendChild(newPortElement);
    const portsElementWidth = parseInt(portsElement.style.width, 10);
    portsElement.style.width = `${portsElementWidth + 256}px`;
  });
};

Controller.prototype.renderShip = function () {
  const shipElement = document.querySelector("#ship");
  const currentPortIndex = this.ship.itinerary.indexOf(this.ship.currentPort);
  const portElement = document.querySelector(
    `[data-port-index='${currentPortIndex}']`
  );
  shipElement.style.top = `${portElement.offsetTop + 32}px`;
  shipElement.style.left = `${portElement.offsetLeft - 32}px`;
};

Controller.prototype.setSail = function () {
  const ship = this.ship;
  const This = this;
  const shipElement = document.querySelector("#ship");
  const nextPortIndex = this.ship.itinerary.indexOf(ship.currentPort) + 1;
  const nextPortElement = document.querySelector(
    `[data-port-index='${nextPortIndex}']`
  );
  let leftPosition = parseInt(shipElement.style.left, 10);
  if (!nextPortElement) {
    this.renderMessage("The ship has reached its destination");
  } else {
    this.renderMessage(`The ship has now left ${ship.currentPort.name}`);
    ship.setSail();
    const gradualMovement = setInterval(function () {
      leftPosition += 1;
      shipElement.style.left = `${leftPosition}px`;
      if (leftPosition === nextPortElement.offsetLeft - 32) {
        clearInterval(gradualMovement);
        ship.dock();
        This.display();
        This.renderMessage(`The ship is now at ${ship.currentPort.name}`);
      }
    }, 20);
  }
};

Controller.prototype.renderMessage = function (message) {
  const messageElement = document.createElement("div");
  messageElement.id = "message";
  messageElement.innerHTML = message;
  const viewPort = document.querySelector("#viewport");
  viewPort.appendChild(messageElement);
  setTimeout(() => {
    viewPort.removeChild(messageElement);
  }, 2000);
};

Controller.prototype.display = function () {
  const display = document.querySelector(".headup");
  const ship = this.ship;
  const nextPortIndex = ship.itinerary.indexOf(ship.currentPort) + 1;
  const nextPort = ship.itinerary[nextPortIndex];
  if (!nextPort) {
    display.innerHTML = `Current port: ${ship.currentPort.name}
    <br>
    Next port: This is the last port on the itinerary`;
  } else {
    display.innerHTML = `Current port: ${ship.currentPort.name}
  <br>
  <br>
  Next port: ${nextPort.name}`;
  }
};

Controller.prototype.addPort = function (event) {
  event.preventDefault();

  const addedPort = document.getElementById("new-port");
  const newPort = new Port(addedPort.value);
  this.ship.itinerary.push(newPort);

  if (this.ship.itinerary.length === 1) {
    this.renderPorts(this.ship.itinerary);
    this.ship.currentPort = newPort;
    this.renderShip();
  } else {
    const portsParentElement = document.querySelector("#ports");
    portsParentElement.innerHTML = "";
    this.renderPorts(this.ship.itinerary);
  }

  this.display();
  const button = document.querySelector("#sail-button");
  button.addEventListener("click", () => {
    this.setSail();
  });
};
