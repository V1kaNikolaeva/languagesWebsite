from django.shortcuts import render
from .models import Card
# Create your views here.
from django.http import HttpResponse


def index(reguest):

    return render(reguest, 'main/index.html')

def tests(reguest):
    return render(reguest, 'main/tests.html')

def chCards(reguest):
    cards = Card.objects.all()
    return render(reguest, 'main/chCards.html', {'cards': cards})







