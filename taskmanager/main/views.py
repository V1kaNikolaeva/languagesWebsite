from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse


def index(reguest):
    return render(reguest, 'main/templates/index.html')

def tests(reguest):
    return render(reguest, 'main/templates/tests.html')







