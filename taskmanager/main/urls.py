from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('pickTest', views.pickTest),
    path('chCards', views.chCards),
    path('chDetail/<int:id>', views.detailChPage, name='detailChPage'),
    path('chTest', views.chTest),
    path('enTest', views.enTest),
    path('enCards', views.enCards),
    path('createChCard', views.createChCard),
    path('createEnCard', views.createEnCard),
]
