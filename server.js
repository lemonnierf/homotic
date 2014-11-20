var gpio = require("pi-gpio");

gpio.open(4, "output", function(err) {     // Open pin 16 for output
gpio.read(4, function(err, value) {
    if(err) throw err;
    console.log(value); // The current state of the pin
    });
});