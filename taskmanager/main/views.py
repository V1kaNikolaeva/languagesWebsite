from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse


def index(reguest):
    return render(reguest, 'main/index.html')

def about(reguest):
    return render(reguest, 'main/about.html')

def mda(reguest):
    return render(reguest, 'main/mda.html')