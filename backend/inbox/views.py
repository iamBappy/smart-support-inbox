from rest_framework import generics

from .models import Conversation
from .serializers import (
    ConversationSerializer,
    ConversationDetailSerializer,
)


class ConversationListView(generics.ListAPIView):

    queryset = Conversation.objects.all().order_by("-updated_at")

    serializer_class = ConversationSerializer


class ConversationDetailView(generics.RetrieveAPIView):

    queryset = Conversation.objects.all()

    serializer_class = ConversationDetailSerializer