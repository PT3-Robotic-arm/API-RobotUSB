import serial;
import io;
import time;
import os;


class USBReader:
    def __read__():
        ser = serial.Serial('/dev/ttyACM0', 9600, timeout =1)
        print(ser.readline(500))
        return ser.readline(500)