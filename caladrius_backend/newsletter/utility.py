import pandas as pd
from django.core.mail import send_mail
from django.conf import settings
from .models import NewsletterSubscribers  # Importez votre modèle

class NewsletterManager:
    def __init__(self):
        self.subscribers_df = self._load_subscribers()
    
    def _load_subscribers(self):
        """Charge les abonnés depuis la base de données dans un DataFrame"""
        queryset = NewsletterSubscribers.objects.filter(is_active=True)
        return pd.DataFrame.from_records(queryset.values())
    
    def add_subscriber(self, name, email):
        """Ajoute un nouvel abonné"""
        subscriber, created = NewsletterSubscribers.objects.get_or_create(
            email=email,
            defaults={'name': name}
        )
        if created:
            self._send_welcome_email(subscriber)
            self.subscribers_df = self._load_subscribers()  # Mise à jour du DataFrame
        return created
    
    def send_newsletter(self, subject, message):
        """Envoie la newsletter à tous les abonnés"""
        recipients = self.subscribers_df['email'].tolist()
        
        send_mail(
            subject=subject,
            message=message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=recipients,
            fail_silently=False,
        )
        return len(recipients)
    
    def _send_welcome_email(self, subscriber):
        """Email de bienvenue pour les nouveaux abonnés"""
        send_mail(
            subject="Bienvenue à notre newsletter",
            message=f"Merci {subscriber.name} pour votre inscription !",
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[subscriber.email],
            fail_silently=False,
        )
    
    def get_subscribers_data(self):
        """Retourne les données des abonnés pour analyse"""
        return self.subscribers_df.describe(include='all') if not self.subscribers_df.empty else None