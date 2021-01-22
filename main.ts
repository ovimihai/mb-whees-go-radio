radio.onReceivedNumber(function (receivedNumber) {
    straight(receivedNumber)
    basic.pause(Pause)
})
function stop () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P8, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
    pins.analogWritePin(AnalogPin.P12, 0)
}
radio.onReceivedString(function (receivedString) {
    if ("" == "") {
        stop()
    }
})
function straight (num: number) {
    if (num > 10) {
        pins.analogWritePin(AnalogPin.P0, num * 2)
        pins.analogWritePin(AnalogPin.P8, num * 2)
    } else if (num < -10) {
        pins.analogWritePin(AnalogPin.P16, num * -2)
        pins.analogWritePin(AnalogPin.P12, num * -2)
    } else {
        stop()
    }
}
let Pause = 0
radio.setGroup(1)
basic.showIcon(IconNames.Diamond)
Pause = 100
