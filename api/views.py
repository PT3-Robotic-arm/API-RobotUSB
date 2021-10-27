from django.shortcuts import render
from django.http import HttpResponse
from reader import USBReader
# Create your views here.

def index(request):
    data = USBReader.__read__()
    html = "<html><body> Data: %s </body></html>" % data
    return HttpResponse(html)