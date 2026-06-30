from django.db.models import Q
from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Conversation, Message
from .serializers import (
    ConversationSerializer,
    ConversationDetailSerializer,
    ReplySerializer,
    MessageSerializer,
)


class ConversationListView(generics.ListAPIView):
    serializer_class = ConversationSerializer

    def get_queryset(self):
        queryset = Conversation.objects.all().order_by("-updated_at")

        status_filter = self.request.query_params.get("status")
        search = self.request.query_params.get("search")

        if status_filter:
            queryset = queryset.filter(status=status_filter)

        if search:
            queryset = queryset.filter(
                Q(customer_name__icontains=search)
            )

        return queryset


class ConversationDetailView(generics.RetrieveAPIView):

    queryset = Conversation.objects.all()

    serializer_class = ConversationDetailSerializer

class ReplyView(APIView):

    def post(self, request, pk):

        conversation = get_object_or_404(Conversation, pk=pk)

        serializer = ReplySerializer(data=request.data)

        if serializer.is_valid():

            new_message = Message.objects.create(
                conversation=conversation,
                sender="agent",
                message=serializer.validated_data["message"]
            )

            conversation.save()

            return Response(
                MessageSerializer(new_message).data,
                status=status.HTTP_201_CREATED
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )