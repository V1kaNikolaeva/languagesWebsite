from django.db import models


# Create your models here.

class Card(models.Model):
    word = models.CharField('Слово', max_length=20)
    description = models.TextField('Перевод', max_length=70)

    def __str__(self):
        return self.word


class enCard(models.Model):
    word = models.CharField('Слово', max_length=20)
    description = models.TextField('Перевод', max_length=70)

    def __str__(self):
        return self.word
