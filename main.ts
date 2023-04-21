radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
})
input.onButtonPressed(Button.A, function () {
    if (個位數 == 9) {
        個位數 = 0
    } else {
        個位數 += 1
    }
    basic.showString("" + (個位數))
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(十位數 * 10 + 個位數)
    basic.showString("" + (十位數 * 10 + 個位數))
    十位數 = 0
    個位數 = 0
    radio.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_B,
    EventBusValue.MICROBIT_BUTTON_EVT_CLICK
    )
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    if (十位數 == 9) {
        十位數 = 0
    } else {
        十位數 += 1
    }
    basic.showString("" + (十位數))
})
input.onGesture(Gesture.EightG, function () {
    radio.sendString("ok")
    個位數 = 0
    十位數 = 0
    basic.showString("ok")
})
let 十位數 = 0
let 個位數 = 0
radio.setGroup(169)
個位數 = 0
十位數 = 0
radio.setTransmitPower(7)
