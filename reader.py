import re

import serial
import os


class USBReader:
    def __init__(self):
        self.x = 0
        self.y = 0
        self.z = 0
        self.arduino = ''
        self.ser = None
        self.find_arduino_address()
        self.instance = None

    def get_instance(self):
        if self.instance is None:
            self.instance = USBReader()
        return self.instance

    def find_arduino_address(self):
        regex = re.compile(r'ttyACM\d*')

        files = os.listdir("/dev")

        for file in files:
            if regex.match(file):
                self.arduino = file

        if self.arduino == '':
            print("No Arduino found, please verify it is correctly connected to the computer")

    def connect_arduino(self):
        if self.arduino == '':
            print("No Arduino found!")
            return False

        print("/dev/" + self.arduino)
        try:
            self.ser = serial.Serial("/dev/" + self.arduino, 9600, timeout=1)
            return True
        except serial.SerialException:
            print("Couldn't connect!")
            return False

    def parse_data(self, datas):
        datas = datas.decode('utf-8')
        print(datas)

    def get_data(self):
        if self.connect_arduino():
            while True:
                self.parse_data(self.ser.readline())

    def send_data_to_base(self):
        #TODO
        pass

    def get_last_index(self):
        #TODO
        pass