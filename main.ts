radio.onReceivedNumber(function (receivedNumber) {
    straight(receivedNumber)
})
function straight (num: number) {
    if (num > 0) {
        pins.analogWritePin(AnalogPin.P0, num)
        pins.analogWritePin(AnalogPin.P8, num)
        basic.pause(1000)
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P8, 0)
    } else {
        pins.analogWritePin(AnalogPin.P16, num * -1)
        pins.analogWritePin(AnalogPin.P12, num * -1)
        basic.pause(1000)
        pins.analogWritePin(AnalogPin.P16, 0)
        pins.analogWritePin(AnalogPin.P12, 0)
    }
}
radio.setGroup(1)
basic.showIcon(IconNames.Diamond)
