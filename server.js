var gpio = require("pi-gpio");

gpio.open(7, "output", function(err) {     // Open pin 16 for output
gpio.read(7, function(err, value) {
    if(err) throw err;
    console.log(value); // The current state of the pin
    });
});