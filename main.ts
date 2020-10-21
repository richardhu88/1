basic.forever(function () {
    for (let y = 0; y <= 8; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(4 - x, 4 - (y - x))
        }
        basic.pause(100)
    }
    for (let y = 0; y <= 8; y++) {
        for (let x = 0; x <= 4; x++) {
            led.unplot(x, y - x)
        }
        basic.pause(100)
    }
    for (let y = 0; y <= 8; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y - x)
        }
        basic.pause(100)
    }
    for (let y = 0; y <= 8; y++) {
        for (let x = 0; x <= 4; x++) {
            led.unplot(4 - x, 4 - (y - x))
        }
        basic.pause(100)
    }
})
