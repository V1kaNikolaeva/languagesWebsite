# Generated by Django 4.1.1 on 2023-03-26 15:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_card_partofspeech'),
    ]

    operations = [
        migrations.AddField(
            model_name='encard',
            name='partOfSpeech',
            field=models.CharField(choices=[('(сущ.)', 'Существительное'), ('(гл.)', 'Глагол'), ('(прил.)', 'Прилагательное'), ('(нар.)', 'Наречие')], default='(сущ.)', max_length=7),
        ),
        migrations.AlterField(
            model_name='card',
            name='partOfSpeech',
            field=models.CharField(choices=[('(сущ.)', 'Существительное'), ('(гл.)', 'Глагол'), ('(прил.)', 'Прилагательное'), ('(нар.)', 'Наречие')], default='(сущ.)', max_length=7),
        ),
    ]