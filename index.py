import serial

from reader import USBReader

reader = USBReader().get_instance()

reader.get_data()
