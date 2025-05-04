from django.shortcuts import render, HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import NewsletterSubscribers
from .serializers import NewsletterSubscribersSerializer

# Create your views here.
def index(request):
    return HttpResponse("Hello, world. You're at the newsletter index.")

class NewsletterSubscriberView(APIView):
    """
    Vue pour gérer les abonnés à la newsletter
    """
    
    def get(self, request):
        subscribers = NewsletterSubscribers.objects.all()
        serializer = NewsletterSubscribersSerializer(subscribers, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = NewsletterSubscribersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)