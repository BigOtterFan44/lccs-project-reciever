radio.onReceivedString(function (receivedString) {
    if (Writing == true) {
        serial.writeLine(receivedString)
    } else {
    	
    }
})
radio.onReceivedValue(function (name, value) {
    if (value == 1) {
        serial.writeLine("Start")
        Writing = true
    } else if (value == 0) {
        Writing = false
        serial.writeLine("Stop")
    } else {
    	
    }
})
let Writing = false
radio.setGroup(1)
