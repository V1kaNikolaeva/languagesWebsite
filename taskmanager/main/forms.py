from .models import Card, enCard
from django.forms import ModelForm, TextInput, Textarea, Select


class CardForm(ModelForm):
    class Meta:
        model = Card
        fields = ["word", "description", "partOfSpeech", "exposition"]
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
            "exposition": Textarea(attrs={
                'class': 'inputTrns',
                'id': 'inForm',
                'placeholder': 'Описание (Необязательное поле, будет доступно в разделе "Подробно")',
            }),
            "partOfSpeech": Select(attrs={
                'class': 'selectSpeech',
                'id': 'inSelect',
                'placeholder': 'Выберите часть речи',
            }),
        }


class enCardForm(ModelForm):
    class Meta:
        model = enCard
        fields = ["word", "description", "partOfSpeech", "exposition"]
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
            "exposition": Textarea(attrs={
                'class': 'inputTrns',
                'id': 'inForm',
                'placeholder': 'Описание (Необязательное поле, будет доступно в разделе "Подробно")',
            }),
            "partOfSpeech": Select(attrs={
                'class': 'selectSpeech',
                'id': 'inSelect',
                'placeholder': 'Выберите часть речи',
            }),
        }
