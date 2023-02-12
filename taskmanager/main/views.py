from django.shortcuts import render
from .models import Card, enCard
# Create your views here.
from django.http import HttpResponse


def index(reguest):

    return render(reguest, 'main/index.html')

def pickTest(reguest):
    return render(reguest, 'main/pickTest.html')

def chTest(reguest):
    return render(reguest, 'main/chTest.html')

def enTest(reguest):
    return render(reguest, 'main/enTest.html')

def chCards(reguest):
    cards = Card.objects.all()
    return render(reguest, 'main/chCards.html', {'cards': cards})

def createChCard(reguest):
    return render(reguest, 'main/createChCard.html')

def enCards(reguest):
    enCards = enCard.objects.all()
    return render(reguest, 'main/enCards.html', {'enCards': enCards})

def createEnCard(reguest):
    return render(reguest, 'main/createEnCard.html')





