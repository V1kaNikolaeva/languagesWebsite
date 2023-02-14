from django.shortcuts import render, redirect
from .models import Card, enCard
from .forms import CardForm, enCardForm


def index(reguest):

    return render(reguest, 'main/index.html')

def pickTest(reguest):
    return render(reguest, 'main/pickTest.html')

def chTest(reguest):
    return render(reguest, 'main/chTest.html')

def enTest(reguest):
    return render(reguest, 'main/enTest.html')

def chCards(reguest):
    cards = Card.objects.order_by('-id')
    return render(reguest, 'main/chCards.html', {'cards': cards})

def createChCard(reguest):
    if reguest.method == 'POST':
        form = CardForm(reguest.POST)
        if form.is_valid():
            form.save()
            return redirect('/chCards')

    form = CardForm()
    context = {
        'form': form,
    }
    return render(reguest, 'main/createChCard.html', context)

def enCards(reguest):
    enCards = enCard.objects.all()
    return render(reguest, 'main/enCards.html', {'enCards': enCards})

def createEnCard(reguest):
    if reguest.method == 'POST':
        form = enCardForm(reguest.POST)
        if form.is_valid():
            form.save()
            return redirect('/enCards')

    form = enCardForm()
    context = {
        'form': form,
    }
    return render(reguest, 'main/createEnCard.html', context)





