#!/bin/sh
# Install libraries

sudo pip install serial
sudo pip install django
sudo pip install django-cors-headers

echo all libraries installed

python3 manage.py migrate
python3 manage.py runserver
