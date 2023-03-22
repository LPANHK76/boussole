let DEGREE = 0
basic.forever(function () {
    DEGREE = input.compassHeading()
    if (DEGREE < 44) {
        basic.showString("N")
        basic.showNumber(DEGREE)
    } else if (DEGREE < 134) {
        basic.showString("E")
        basic.showNumber(DEGREE)
    } else if (DEGREE < 224) {
        basic.showString("S")
        basic.showNumber(DEGREE)
    } else if (DEGREE < 314) {
        basic.showString("O")
        basic.showNumber(DEGREE)
    } else {
        basic.showString("N")
        basic.showNumber(DEGREE)
    }
})
