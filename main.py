def on_received_string(receivedString):
    serial.write_line(receivedString)
radio.on_received_string(on_received_string)

def on_received_value(name, value):
    if value == 1:
        pass
    else:
        pass
radio.on_received_value(on_received_value)

radio.set_group(1)