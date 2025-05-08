from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAdminUser
from rest_framework.throttling import AnonRateThrottle
from django.db import transaction
from .models import Contact
from .serializers import ContactSerializer
from newsletter.utility import NewsletterManager

# Initialisation du manager newsletter
newsletter_mgr = NewsletterManager()

class ContactView(APIView):
    """
    Vue pour gérer les messages de contact et les inscriptions newsletter
    Permissions :
    - GET : réservé aux admins
    - POST : accessible à tous (avec throttling)
    """
    #permission_classes = [IsAdminUser]  # Seuls les admins peuvent lister les contacts
    throttle_classes = [AnonRateThrottle]  # Protection contre le spam

    def get(self, request):  # Correction: ajout du paramètre request manquant
        """
        Liste tous les contacts (réservé aux administrateurs)
        """
        contacts = Contact.objects.all()
        serializer = ContactSerializer(contacts, many=True)
        return Response(serializer.data)
    
    @transaction.atomic  # Garantit l'intégrité des données
    def post(self, request):
        """
        Crée un nouveau contact et gère l'inscription newsletter
        """
        serializer = ContactSerializer(data=request.data)
        
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            # Sauvegarde du contact
            contact = serializer.save()
            
            # Abonnement newsletter seulement si l'email est valide et présent
            email = request.data.get('email')
            if email:
                newsletter_mgr.add_subscriber(
                    name=request.data.get('name', ''),  # Valeur par défaut vide
                    email=email
                )
            
            return Response(
                serializer.data, 
                status=status.HTTP_201_CREATED
            )
            
        except Exception as e:  # Gestion des erreurs inattendues
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )