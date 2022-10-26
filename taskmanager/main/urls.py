from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('about-us', views.about),
    path('sing-in', views.singin),
    path('look-ch', views.lookch),
    path('look-en', views.looken),
    path('look-fr', views.lookfr),
    path('cards-en', views.cardsen),
    path('cards-ch', views.cardsch),
    path('cards-fr', views.cardsfr)
]
