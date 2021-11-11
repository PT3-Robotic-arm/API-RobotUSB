from django.db import models

# Create your models here.

#Coordinates data from arduino usb
class Coordinates(models.Model):
    x = models.FloatField()
    xs = models.IntegerField()
    y = models.FloatField()
    ys = models.IntegerField()
    z = models.FloatField()
    zs = models.IntegerField()
    index = models.IntegerField(primary_key=True)
    orientation = models.CharField(max_length=50, default="")