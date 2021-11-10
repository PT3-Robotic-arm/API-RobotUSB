from django.shortcuts import render
from django.http import HttpResponse
from reader import USBReader
# Create your views here.

def index(request):
    read = USBReader().get_instance()

    data = read.get_data()
    html = "<html><body> Data: %s </body></html>" % data
    return HttpResponse(html)
