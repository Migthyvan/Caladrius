from django.urls import path
from .views import ContactView  # Import explicite

urlpatterns = [
    path('',ContactView.as_view(), name='contact'),  # Correction de l'orthographe
]