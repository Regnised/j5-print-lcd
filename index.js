const five = require("johnny-five");
const board = new five.Board();

board.on("ready", function () {
    const LCD = new five.LCD({
        controller: "PCF8574"
    });
    let flag = true;
    LCD.useChar("heart");
    LCD.useChar("check");

    this.repl.inject({
        LCD: LCD
    });

    setInterval(function() {
        if (flag) {
            LCD.clear().print("Hello, World!");
            LCD.cursor(1, 0).print("I :heart: Node.js");
            flag = false;
        } else {
            LCD.clear().cursor(0, 0).print("I print on LCD :check:");
            flag = true;
        }
    }, 3000);
});