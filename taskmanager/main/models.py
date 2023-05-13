from django.db import models


# Create your models here.

class Card(models.Model):
    word = models.CharField('Слово', max_length=20)
    description = models.TextField('Перевод', max_length=30)
    exposition = models.TextField('Описание')
    exposition = models.TextField(
        max_length=100,
        blank=True,
    )
    partOfSpeech = models.CharField('Часть речи')
    partOfSpeech = [
        ('(сущ.)', 'Существительное'),
        ('(гл.)', 'Глагол'),
        ('(прил.)', 'Прилагательное'),
        ('(нар.)', 'Наречие'),
        ('(сч.сл.)', 'Счетное слово'),
        ('(друг.)', 'Другое'),
    ]
    partOfSpeech = models.CharField(
        max_length=max(len(v[0]) for v in partOfSpeech),
        choices=partOfSpeech,
        default='(сущ.)',
    )

    def __str__(self):
        return self.word


class enCard(models.Model):
    word = models.CharField('Слово', max_length=20)
    description = models.TextField('Перевод', max_length=30)
    exposition = models.TextField('Описание')
    exposition = models.TextField(
        max_length=100,
        blank=True,
    )
    partOfSpeech = [
        ('(сущ.)', 'Существительное'),
        ('(гл.)', 'Глагол'),
        ('(прил.)', 'Прилагательное'),
        ('(нар.)', 'Наречие'),
        ('(друг.)', 'Другое'),
    ]
    partOfSpeech = models.CharField(
        max_length=max(len(v[0]) for v in partOfSpeech),
        choices=partOfSpeech,
        default='(сущ.)',
    )

    def __str__(self):
        return self.word
















