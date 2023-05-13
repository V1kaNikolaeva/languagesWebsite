from django.shortcuts import render, redirect
from .models import Card, enCard
from .forms import CardForm, enCardForm
from django.urls import reverse, reverse_lazy
from django.contrib.auth.views import LoginView

def index(request):

    return render(request, 'main/index.html')

def pickTest(request):
    return render(request, 'main/pickTest.html')

def chTest(request):
    return render(request, 'main/chTest.html')

def enTest(request):
    return render(request, 'main/enTest.html')

def chCards(request):
    cards = Card.objects.order_by('-id')
    return render(request, 'main/chCards.html', {'cards': cards})

def detailChPage(request, id):
    getChCard = Card.objects.get(id=id)
    return render(request, 'main/chDetail.html', {'getChCard': getChCard})

def createChCard(request):
    if request.method == 'POST':
        form = CardForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/chCards')

    form = CardForm()
    context = {
        'form': form,
    }
    return render(request, 'main/createChCard.html', context)

def updateChPage(request, pk):
    getChCard = Card.objects.get(pk=pk)

    if request.method == 'POST':
        form = CardForm(request.POST, instance=getChCard)
        if form.is_valid():
            form.save()
            return redirect('/chCards')


    context = {
        'getChCard': getChCard,
        'update': True,
        'form': CardForm(instance=getChCard),
    }
    return render(request, 'main/chCards.html', context)

def deleteChPage(request, pk):
    getChCard = Card.objects.get(pk=pk)
    getChCard.delete()
    return redirect(reverse('chCards'))

def enCards(request):
    enCards = enCard.objects.order_by('-id')
    return render(request, 'main/enCards.html', {'enCards': enCards})

def detailEnPage(request, id):
    getEnCard = enCard.objects.get(id=id)
    return render(request, 'main/enDetail.html', {'getEnCard': getEnCard})


def createEnCard(request):
    if request.method == 'POST':
        form = enCardForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/enCards')

    form = enCardForm()
    context = {
        'form': form,
    }
    return render(request, 'main/createEnCard.html', context)

def updateEnPage(request, pk):
    getEnCard = enCard.objects.get(pk=pk)

    if request.method == 'POST':
        form = enCardForm(request.POST, instance=getEnCard)
        if form.is_valid():
            form.save()
            return redirect('/enCards')


    context = {
        'getEnCard': getEnCard,
        'update': True,
        'form': enCardForm(instance=getEnCard),
    }
    return render(request, 'main/enCards.html', context)

def deleteEnPage(request, pk):
    getEnCard = enCard.objects.get(pk=pk)
    getEnCard.delete()
    return redirect(reverse('enCards'))




