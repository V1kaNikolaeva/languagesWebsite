from .models import Card, enCard
from django.forms import ModelForm, TextInput, Textarea


class CardForm(ModelForm):
    class Meta:
        model = Card
        fields = ["word", "description"]
        widgets = {
            "word": TextInput(attrs={
                'class': 'inputWord',
                'id': 'inForm',
                'placeholder': 'Введите слово',
            }),
            "description": Textarea(attrs={
                'class': 'inputTrns',
                'id': 'inForm',
                'placeholder': 'Введите перевод',
            }),
        }


class enCardForm(ModelForm):
    class Meta:
        model = enCard
        fields = ["word", "description"]
        widgets = {
            "word": TextInput(attrs={
                'class': 'inputWord',
                'id': 'inForm',
                'placeholder': 'Введите слово',
            }),
            "description": Textarea(attrs={
                'class': 'inputTrns',
                'id': 'inForm',
                'placeholder': 'Введите перевод',
            }),
        }
