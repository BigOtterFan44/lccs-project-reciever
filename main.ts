radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        serial.writeLine("++++++++++++++++++")
        serial.writeLine("++++++++++++++++++")
        Writing = true
    } else if (receivedNumber == 0) {
        serial.writeLine("-----------------")
        serial.writeLine("-----------------")
        Writing = false
    } else {
    	
    }
})
radio.onReceivedString(function (receivedString) {
    if (Writing == true) {
        serial.writeLine(receivedString)
    } else {
    	
    }
})
let Writing = false
radio.setGroup(1)
