from django.http import JsonResponse
from django.shortcuts import render
from django.http import HttpResponse
from reader import USBReader
from api.models import Coordinates

# Create your views here.

def index(request):
    read = USBReader().get_instance()

    data = read.get_data()
    html = "<html><body> Data: %s </body></html>" % data
    return HttpResponse(html)

#Send cordinates via JsonResponse
def getData(request):
    read = USBReader().get_instance()
    index = 1 #index of the data -> add get_last_index() in reader
    data = {
        'x': Coordinates.objects.get(index=index).x,
        'y': Coordinates.objects.get(index=index).y,
        'z': Coordinates.objects.get(index=index).z,
        'xs': Coordinates.objects.get(index=index).xs,
        'ys': Coordinates.objects.get(index=index).ys,
        'zs': Coordinates.objects.get(index=index).zs,
        'orientation': Coordinates.objects.get(index=index).orientation,
        'index': index
    }
    return JsonResponse(data)
    