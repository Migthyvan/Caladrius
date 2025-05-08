from django.db import models

# Create your models here.
class Contact(models.Model):
    """
    Modèle pour les messages de contact
    """
    name = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Message de {self.name} ({self.email})'
    
    class Meta:
        verbose_name = "Message de contact"
        verbose_name_plural = "Messages de contact"
