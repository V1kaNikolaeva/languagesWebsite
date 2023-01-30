from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse


def index(reguest):
    return render(reguest, 'main/index.html')

def tests(reguest):
    return render(reguest, 'main/tests.html')







