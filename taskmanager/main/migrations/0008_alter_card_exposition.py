# Generated by Django 4.1.1 on 2023-04-08 17:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_card_exposition_alter_card_description_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='card',
            name='exposition',
            field=models.TextField(max_length=100),
        ),
    ]
