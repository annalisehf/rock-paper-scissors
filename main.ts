input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(delay)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(delay)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        # # # . .
        . . # # .
        `)
    basic.pause(delay)
    basic.showNumber(1)
    basic.pause(delay)
    basic.showNumber(2)
    basic.pause(delay)
    basic.showNumber(3)
    basic.pause(delay)
    shoot = randint(1, 3)
    if (1 == shoot) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (2 == shoot) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            # # # . .
            . . # # .
            `)
    }
})
let shoot = 0
let delay = 0
delay = 300
basic.forever(function () {
	
})
