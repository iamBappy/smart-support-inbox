from rest_framework import serializers
from .models import Conversation, Message


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = [
            "id",
            "sender",
            "message",
            "created_at",
        ]


class ConversationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Conversation
        fields = [
            "id",
            "customer_name",
            "status",
            "sentiment",
            "created_at",
            "updated_at",
        ]


class ConversationDetailSerializer(serializers.ModelSerializer):

    messages = MessageSerializer(many=True, read_only=True)

    class Meta:
        model = Conversation
        fields = [
            "id",
            "customer_name",
            "status",
            "sentiment",
            "messages",
            "created_at",
            "updated_at",
        ]

class ReplySerializer(serializers.Serializer):
    message = serializers.CharField()

