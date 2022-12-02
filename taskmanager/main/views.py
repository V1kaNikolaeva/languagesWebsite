from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse


def index(reguest):
    return render(reguest, 'main/index.html')

def about(reguest):
    return render(reguest, 'main/about.html')

def singin(reguest):
    return render(reguest, 'main/singin.html')

def lookch(reguest):
    #signs = Sign.objects.order_by('-id')
    return render(reguest, 'main/lookch.html')

def looken(reguest):
    return render(reguest, 'main/looken.html')

def cardsen(reguest):
    return render(reguest, 'main/cardsen.html')

def cardsch(reguest):
    return render(reguest, 'main/cardsch.html')





