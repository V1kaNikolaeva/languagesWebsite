from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('pickTest', views.pickTest),
    path('chCards', views.chCards, name='chCards'),
    path('chDetail/<int:id>', views.detailChPage, name='detailChPage'),
    path('chUpdate/<int:pk>', views.updateChPage, name='updateChPage'),
    path('chDelete/<int:pk>', views.deleteChPage, name='deleteChPage'),

    path('enDetail/<int:id>', views.detailEnPage, name='detailEnPage'),
    path('enUpdate/<int:pk>', views.updateEnPage, name='updateEnPage'),
    path('enDelete/<int:pk>', views.deleteEnPage, name='deleteEnPage'),
    path('chTest', views.chTest),
    path('enTest', views.enTest),
    path('enCards', views.enCards, name='enCards'),
    path('createChCard', views.createChCard),
    path('createEnCard', views.createEnCard),
]
