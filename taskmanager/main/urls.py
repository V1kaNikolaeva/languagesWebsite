from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('pickTest', views.pickTest),
    path('chCards', views.chCards),
    path('chTest', views.chTest),
    path('enTest', views.enTest),
    path('enCards', views.enCards),

]
