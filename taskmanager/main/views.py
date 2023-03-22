from django.shortcuts import render, redirect
from .models import Card, enCard
from .forms import CardForm, enCardForm


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

def enCards(request):
    enCards = enCard.objects.all()
    return render(request, 'main/enCards.html', {'enCards': enCards})

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

# def delete_page(request, pk):
#
#     return redirect('/chCards')


